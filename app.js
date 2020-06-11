const express = require("express");
const app = express();
const upload = require("express-fileupload");
const fs = require('fs');
const PORT = process.env.PORT || 3000;

app
	.use(upload())
	.get("/", function (req, res) {
		fs.unlink("./images/image.jpg", function (err) { });
		res.sendFile(__dirname + "/routes/index.html");
	})
	.post("/upload", function (req, res) {
		var file = req.files.upfile;
		var uploadpath = __dirname + "/images/image.jpg";
		file.mv(uploadpath, function (err) {
			res.sendFile(__dirname + "/routes/model.html");
		});
	})
	.get("/images/image.jpg", (req, res) => {
		res.sendFile(__dirname + "/images/image.jpg")
	})
	.listen(PORT, () => {
		console.log("server started on port : 3000");
	});
