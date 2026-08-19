const { REST, Routes } = require("discord.js");
const dotenv = require("dotenv");

dotenv.config();

const token = process.env.DISCORD_TOKEN;
const clientID = process.env.CLIENT_ID;

const commands = [
  {
    name: "create",
    description: "creates a new short URL!",
  },
];

const rest = new REST({ version: "10" }).setToken(token);

(async () => {
  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(Routes.applicationCommands(clientID), { body: commands });

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
})();