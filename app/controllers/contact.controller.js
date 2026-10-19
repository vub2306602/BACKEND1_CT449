exports.create = (req, res) =>{
    res.send({message: "create hanfler" });
};

exports.findAll = (req, res) => {
    res.send({message: "finAll handler" });
};

exports.findOne = (req, res) => {
    res.send({message: "finOne handler" });
};

exports.update = (req, res) => {
    res.send({message: "update handler" });
};

exports.delete = (req, res) => {
    res.send({message: "delete handler" });
};

exports.deleteAll = (req, res) => {
    res.send({message: "deletell handler" });
};

exports.findAllFavorite = (req, res) => {
    res.send({message: "finAllFavorite handler"});
};