exports.handler = (event, context, callback) => {
var name = event.username;
var password = event.password;
var key = 'jwtTokenkey';
var jsonwebtoken = require("jsonwebtoken");
var token = jsonwebtoken.sign({ val : name}, key, { expiresIn: "1h" });
callback(null, token);
};