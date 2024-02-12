const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://mallimeetup:10I11Bekx2BO6LH1@cluster0.ofsna6r.mongodb.net/?retryWrites=true&w=majority"
  );
};

module.exports = connect;
