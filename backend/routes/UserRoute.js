import express from "express";
import {getUsers} from "../controllers/UserController.js";

const router = exppress.Router();

router.get('/users', getUsers);

export default router;