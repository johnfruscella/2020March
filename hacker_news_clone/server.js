require('dotenv/config');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const messages = require("./routes/articles");

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};
mongoose.connect(process.env.DB_CONNECTION, options);
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to database...'));



// app.use('api/messages', messages);
app.listen(port, () => console.log(`Connectd on port:${port}`));