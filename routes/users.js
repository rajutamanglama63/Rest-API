const express = require("express");

const router = express.Router();

const users = [
    {
        firstName: "Raju",
        lastName: "Lama",
        age: 25
    },
    {
        firstName: "Nitesh",
        lastName: "Chaulagain",
        age: 35
    }
]

router.get("/", (req, res) => {
    res.send(users);
});

router.post("/", (req, res) => {
    const user = req.body;
    // console.log(req.body);
    users.push({...user, id: Math.random()});

    res.send(`user with the name ${user.firstName} added to the database.`);
});

module.exports = router;