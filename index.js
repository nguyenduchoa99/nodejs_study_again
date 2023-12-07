const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/duc-hoa', (req, res) => res.send('Đức Hòa'));

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
