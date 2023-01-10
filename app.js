const bodyParser = require("body-parser");
require('dotenv').config()
const express = require("express")

const app = express();

app.set('view engine', 'ejs')
app.set('views', './views')

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("./public"));

app.get('/', (req, res) => {
    res.render('home', { apikey : process.env.API_KEY })
})

app.listen(3000, ()=> {
    console.log(process.env.API_KEY);
})