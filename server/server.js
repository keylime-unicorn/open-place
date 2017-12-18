let PORT = 3000;

let express = require('express');
let bodyParser = require('body-parser');
let cors = require('cors');

let app = express();
app.listen(PORT, function(){
  console.log("SERVER LISTENING on PORT: ", PORT);
})


