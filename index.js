// implement your API here
const express = require('express');
const cors = require('cors');
const db = require('./data/db.js');

const server = express();

server.use(cors());

server.get('/', (request, response) => {response.send('<h1>Hello FSW13!</h1>');
});

server.get('/api/users', (request, response) => {
    db.find()
    .then(users => {
        console.log('\n** users **', users);
        response.json(users);
    })
    .catch(err => response.send(err));
});

const port = 8000;
server.listen(port, () => 
    console.log(`\n=== API running on port ${port} === \n`));
