//hacemos la conexion a la base de datos
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'grupal',
  password: '1234',
  port: 5432,
  max: 20, // Máximo de 20 clientes
  idleTimeoutMillis: 5000, // 5 segundos de inactividad máxima de un cliente
  connectionTimeoutMillis: 2000 // 2 segundos de espera de un nuevo cliente
});

pool.connect((error, pool, release) => {
  if (error) {
    console.error('El error de conexión es: ' + error);
    return;
  }
  console.log('¡Conectado a la Base de Datos!');
  /*la conexión se establece y se libera inmediatamente con la función release(). 
  Para realizar consultas a la base de datos, puedes utilizar el pool que se obtiene en el callback de la función connect()*/
  release();
});
//Exportar la base de datos
module.exports = pool;
