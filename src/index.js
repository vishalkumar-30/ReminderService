const express = require('express');
const bodyParser = require('body-parser');
const cron = require('node-cron');

const {PORT} = require('./config/serverConfig'); 
const {sendBasicEmail} = require('./services/email-service');

const setupAndStartServer = () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extrnded: true}));

    app.listen(PORT, () => {
        console.log(`server started at ${PORT}`);

        sendBasicEmail(
            'AirlineSupport@admin.com',
            'Flightbookingappservice@gmail.com',
            'This is a testing email',
            'Hey, how are you, I ope you like the support'
        );

        cron.schedule('*/2 * * * *', () => {
          console.log('running a task every two minutes');
        });
    });
}

setupAndStartServer();