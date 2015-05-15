var fortuneCookies = 

[
	'Conqur your fears', 
	'Rivers need springs',
	'Don not fear what you don\'t know',
	'You will have a pleasant surprise',
	'Whenever possible, keep it'

	];

exports.getFortune = function(){

	var idx = Math.floor(Math.random() * 
			fortuneCookies.length);
	return fortuneCookies[idx];

};