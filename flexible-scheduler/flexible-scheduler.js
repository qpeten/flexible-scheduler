module.exports = function(RED) {
    function FlexibleSchedulerNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
            msg.payload = msg.payload.toUpperCase();
            node.send(msg);
        });
    }
    RED.nodes.registerType("flexible-scheduler", FlexibleSchedulerNode);
}
