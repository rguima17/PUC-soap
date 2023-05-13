const soap = require('soap');


const url = 'http://www.dneonline.com/calculator.asmx?WSDL';

const args = {
    intA: 9,
    intB: 3
};

// 9 + 3 = 12
soap.createClient(url, {}, (err, client) => {
    client.Add(args, (err, result) => {
        console.log(result);
    });
});

// 9 - 3 = 6
soap.createClient(url, {}, (err, client) => {
    client.Subtract(args, (err, result) => {
        console.log(result);
    });
});


// 9 / 3 = 3
soap.createClient(url, {}, (err, client) => {
    client.Divide(args, (err, result) => {
        console.log(result);
    });
});

// 9 * 3 = 27
soap.createClient(url, {}, (err, client) => {
    client.Multiply(args, (err, result) => {
        console.log(result);
    });
});