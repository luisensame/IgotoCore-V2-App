'use strict';
let config = {};

// Mantener Heroku despierto
var http = require("http");
setInterval(function() {
    http.get("http://igotomovilapp.herokuapp.com/api/producto/total");
    console.log("Despertando Heroku 🤓");
}, 300000); // every 5 minutes (300000)

// Entorno de la aplicacion production o development;
config.env = 'production';
var cloudinary = require ("cloudinary")

//configuracion para entorno de desarrollo
if (config.env === 'production') {

	// configuración de cloudinary
	cloudinary.config ({ 
	   cloud_name : 'igotoapp', 
	   api_key : 	'281999377259453', 
	   api_secret : 'Bhp_5hpKkPrLwVxRfN79yCx7ZhI'  
	})

	// Configuracion a la base de datos
	config.db = {
		debug: true,
		uri: 'mongodb://igotoroot:creaInte2018.@ds247698.mlab.com:47698/igotodb',
		options: {
			server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }, 
    		replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } }
		}
	};

	// Key para jwt
	config.secret_jwt = 'key_qa';

	// Configuracion para envio de correos
	config.mail = {
		transport: {			
			service: 'Gmail',
			auth: {
				user: 'notifyfoo@gmail.com',
				pass: 'notify2017'
			},
			debug: true
		},
		pathTemplates: 'views/templates/emails/'
	};

	//Host path (usado para linkear los assets en mails)
	config.hostPath = 'https://igotomovilapp.herokuapp.com/';
	//config.hostPath = 'http://localhost:3000/';

	//key privada de conekta
	config.conekta = {
		apiVersion: '2.0.0',
		apiKey: 'key_gzM72mqZVxSx4JsGLoUiEQ',
	};

	//Mail staff ecommerce
	config.mailStaff = 'ventas@igotoapp.com';

	//mail notificacion cron 
	config.mantenimiento = {
		email: 'creainte@gmail.com'
	}
	// pendiente
	config.DATOS_CONTACTO = {
		tel: '+52 1 664 416 2347',
		email: 'ventas@igotoapp.com'
	};
	config.CREACIONES_INTELIGENTES = {
		email: 'creainte@gmail.com'
	};
	config.fromData = {
		from: '"IGOTO APP" <ventas@igotoapp.com>',
		user: 'ventas@igotoapp.com',
		password: "creaInte2018.",
		host: "smtp.dreamhost.com"
	}
} else if(config.env === 'QA') { // Configuracion para QA
	// configuración de cloudinary
	cloudinary.config ({ 
	   cloud_name : 'igotoapp', 
	   api_key : 	'281999377259453', 
	   api_secret : 'Bhp_5hpKkPrLwVxRfN79yCx7ZhI'  
	})

	// Configuracion a la base de datos
	config.db = {
		debug: true,
		uri: 'mongodb://igotoroot:creaInte2018.@ds247698.mlab.com:47698/igotodb',
		options: {
			server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }, 
    		replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } }
		}
	};

	// Key para jwt
	config.secret_jwt = 'key_qa';

	// Configuracion para envio de correos
	config.mail = {
		transport: {			
			service: 'Gmail',
			auth: {
				user: 'notifyfoo@gmail.com',
				pass: 'notify2017'
			},
			debug: true
		},
		pathTemplates: 'views/templates/emails/'
	};

	//Host path (usado para linkear los assets en mails)
	config.hostPath = 'https://igotomovilapp.herokuapp.com/';
	//config.hostPath = 'http://localhost:3000/';

	//key privada de conekta
	config.conekta = {
		apiVersion: '2.0.0',
		apiKey: 'key_gzM72mqZVxSx4JsGLoUiEQ',
	};

	//Mail staff ecommerce
	config.mailStaff = 'ventas@igotoapp.com';

	//mail notificacion cron 
	config.mantenimiento = {
		email: 'creainte@gmail.com'
	}
	// pendiente
	config.DATOS_CONTACTO = {
		tel: '+52 1 664 416 2347',
		email: 'ventas@igotoapp.com'
	};
	config.CREACIONES_INTELIGENTES = {
		email: 'creainte@gmail.com'
	};
	config.fromData = {
		from: '"IGOTO APP" <ventas@igotoapp.com>',
		user: 'ventas@igotoapp.com',
		password: "creaInte2018.",
		host: "smtp.dreamhost.com",
		port: 587,
	};
} else { // configuracion para entorno de produccion
	// configuración de cloudinary
	cloudinary.config ({ 
	   cloud_name : 'igotoapp', 
	   api_key : 	'281999377259453', 
	   api_secret : 'Bhp_5hpKkPrLwVxRfN79yCx7ZhI'  
	})

	// Configuracion a la base de datos
	config.db = {
		debug: true,
		uri: 'mongodb://igotoroot:creaInte2018.@ds247698.mlab.com:47698/igotodb',
		options: {
			server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }, 
    		replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } }
		}
	};

	// Key para jwt
	config.secret_jwt = 'key_qa';

	// Configuracion para envio de correos
	config.mail = {
		transport: {			
			service: 'Gmail',
			auth: {
				user: 'notifyfoo@gmail.com',
				pass: 'notify2017'
			},
			debug: true
		},
		pathTemplates: 'views/templates/emails/'
	};

	//Host path (usado para linkear los assets en mails)
	config.hostPath = 'https://igotomovilapp.herokuapp.com/';
	//config.hostPath = 'http://localhost:3000/';

	//key privada de conekta
	config.conekta = {
		apiVersion: '2.0.0',
		apiKey: 'key_gzM72mqZVxSx4JsGLoUiEQ',
	};

	//Mail staff ecommerce
	config.mailStaff = 'ventas@igotoapp.com';

	//mail notificacion cron 
	config.mantenimiento = {
		email: 'creainte@gmail.com'
	}
	// pendiente
	config.DATOS_CONTACTO = {
		tel: '+52 1 664 416 2347',
		email: 'ventas@igotoapp.com'
	};
	config.CREACIONES_INTELIGENTES = {
		email: 'creainte@gmail.com'
	};
	config.fromData = {
		from: '"IGOTO APP" <ventas@igotoapp.com>',
		user: 'ventas@igotoapp.com',
		password: "creaInte2018.",
		host: "smtp.dreamhost.com",
		port: 587,
	}
}

//Objeto que representa la configuracion necesaria para log4js
config.log4j = {
	appenders: [    	
	   	{ type: 'console', category: 'sell-it-app' },
    	{ type: 'file', filename: 'logs/sell-it-app.log', category: 'sell-it-app', maxLogSize: 20480, numBackups: 2, compress: true, encoding: 'utf-8'},
    	{ type: 'file', filename: 'logs/access.log', category: 'http', maxLogSize: 20480, numBackups: 2, compress: true, encoding: 'utf-8'}
    ]
};

// Dias que se enviara el pedido despues de la fecha
config.diasEntrega = 7;
config.compra = {
	descuento: 10, // El porcentaje de descuento
	costoEnvio: 50, // El costo de envio por producto
	descuentoAplicar: 1000 // El monto minimo para realizar el descuento
};
config.resenia = {
	offset: 0,
	noElementos: 10
};

config.cron = {
	start: true,
	timeZone: 'America/Mexico_City',
	cronTimeDesactivarProducto: '0 0 1,13 * * *', // 0 0 1,13 * * *
	//cronTimeDesactivarProducto: '*/5 * * * * *', // 0 0 1,13 * * *
}

config.apiVersion = 22;

config.MOBILE_VERSION = 12;

config.REFERENCIA = {
	banco: 'Cuenta Bancaria Banamex',
	empresa: 'Ecomaq México S.A. de C.V.',
	noCuenta: '0110908827',
	clabe: '012905001109088277',
	
}
module.exports = config;