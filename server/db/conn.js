require("dotenv").config();
const mongoose = require("mongoose");
const db_pass = process.env.DB;
// console.log(db_pass);
const DB = `mongodb+srv://shivhack999:${db_pass}@cluster0.mhmsojf.mongodb.net/projectX?retryWrites=true&w=majority&appName=Cluster0`;
mongoose.connect(DB, {
    useNewUrlParser: true,
}).then(() => console.log("connection Start")).catch((error) => console.log(error.message));