const Discord = require('discord.js');

const client = new Discord.Client({intents:["GUILDS","GUILD_MESSAGES"]});

client.once('ready', () => {
    console.log('shani barzi is online!');
});





client.login('OTQ4OTgyMzI2OTUwNDk0MzE5.YiDuqQ.llXcA_5vwgyUYy6Au1KwR7_ziN4');
