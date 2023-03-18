import server from "lambda-api"

server.get("/", (req, res) => {
    return {
        "success": "true"
    }
})


exports.handler = async (event, context) => {
    // Run the request
    return await server.run(event, context);
  };