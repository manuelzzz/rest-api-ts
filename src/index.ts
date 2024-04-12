import express from "express";
import http from "http";
import bodyparser from "body-parser";
import cookieparser from "cookie-parser";
import compression from "compression";
import cors from "cors";

import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";

const app = express();

app.use(
    cors({
        credentials: true,
    })
);

app.use(compression());
app.use(bodyparser());
app.use(cookieparser());

const server = http.createServer(app);

server.listen(8080, () => {
    console.log("Server is running on port 8080");
});

const mongodburl = process.env.MONGO_DB_URL || "";

mongoose.Promise = Promise;
mongoose.connect(mongodburl);

mongoose.connection.on("error", (error) => {
    console.error(error);
});
