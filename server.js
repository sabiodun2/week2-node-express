require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// app.get('/', (req, res) => res.send('My Week 2 API!'));

app.post('/user', (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: 'name and email are missing' });
  }
  res.send(`Hello, ${name}!`);
});

app.get('/user/:id', (req, res) => {
  res.send(`User ${req.params.id} profile`);
});

app.use(express.static('public'));

app.listen(PORT, () => console.log(`Running on port ${PORT}`));