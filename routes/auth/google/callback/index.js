exports = module.exports = function(express, middleware, handlers, path) {
    var router = express();

    router.route(path)
        .get(handlers.authCallback);

    return router;
};
