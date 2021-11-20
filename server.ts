import express from "express"
import dotenv from "dotenv"
import path from "path"
// import mustache from "mustache-express"

// import { router } from "./routes/apiRouter"

import { RequestHandler } from "express"

//Initialize DOTENV
dotenv.config()

//Initialize express
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Set view engine
// app.set("view engine", "mst")
// app.set("views", path.join(__dirname, "views"))
// app.engine("mst", mustache())

//Set public folder
app.use(express.static(path.join(__dirname, "../public")))

//Routes
// app.use("/api", router)

app.use<RequestHandler>((req, res) => {
  res.status(404).json({
    error: true,
    msg: "Endpoint não encontrado.",
  })
})

//Start server
app.listen(process.env.PORT || 3000, () => {
  console.log("Server running on http://localhost:3000/api")
})
