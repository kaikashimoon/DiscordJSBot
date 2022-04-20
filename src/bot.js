require('dotenv').config()


const { Client, Message } = require('discord.js')
const client = new Client()
const PREFIX = "$"

client.on('ready', ()=>{
    console.log(`${client.user.tag} has logged in`)
})

client.on('message', async (message)=>{
    if (message.author.bot) return;
    if (message.content.startsWith(PREFIX)) {
    const [CMD_NAME, ...args] = message.content
      .trim()
      .substring(PREFIX.length)
      .split(/\s+/);
    if (CMD_NAME === 'kick') {
        if (!message.member.permissions.has('KICK_MEMBERS')) 
        return message.reply('You do not have permissions to use that command');
      if (args.length === 0)
        return message.reply('Please provide an ID');
      const member = await message.guild.members.fetch(args[0]);
      if (member) {
        member
          .kick()
          
      } else {
        message.channel.send('That member was not found');
      }
      console.log(member)
    }
    
}
})

client.login(process.env.DISCORDJS_BOT_TOKEN)



//console.log(process.env.DISCORDJS_BOT_TOKEN)

/**
 * response method 
 client.on('message', (message)=>{
    if(message.author.bot) return
   // console.log(`[${message.author.tag}]: ${message.content}`) 
    if (message.content === 'hello') {
        message.channel.send('hello')
        //  message.reply('Hello there')
    }
})
 */