const mysql = require(`mysql2`);

const db = mysql.createConnection({
  host: `localhost`,
  user: `root`,
  password: `Puppers7415`,
  database: `employees`,
});

module.exports = db;