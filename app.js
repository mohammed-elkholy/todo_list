const express = require("express");
const bodyparser = require("body-parser");
const datefunction = require(__dirname + "/date.js")

const app = express();
const port = 3000;
const todos = ["buy food", "cook food", "eat food"];
const work_arr = [];


app.set("view engine", "ejs");
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"))


app.get("/",function(req,res){
const day = datefunction.getdate();
res.render("list", {lable:day, new_item:todos});
});


app.get("/work",function(req,res){
res.render("list", {lable:"work", new_item:work_arr});
});

app.get("/about",function(req,res){
res.render("about");
});



app.post("/",function(req,res){
  const new_todo = req.body.new_todo
  if(req.body.save === "work"){
    work_arr.push(new_todo)
    res.redirect("/work");
  }else{
    todos.push(new_todo)
    res.redirect("/");
  }

  });


app.listen(port,function(){
  console.log("your server is running on port "+port);
});
