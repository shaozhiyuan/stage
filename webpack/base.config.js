const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = { 
    context: path.resolve(process.cwd(), "src/app"),
    entry: './sale.js',
    watch: true,
    output: {
        publicPath: path.resolve(process.cwd(), "dist"),
        path: path.resolve(process.cwd(), "dist"),
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                     fallback: 'style-loader',
                     //resolve-url-loader may be chained before sass-loader if necessary
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.less/,
                use: ExtractTextPlugin.extract({
                     fallback: 'style-loader',
                     //resolve-url-loader may be chained before sass-loader if necessary
                    use: ['css-loader', 'less-loader']
                })
            },
            {
                test: /\.(.png|jpg|jpeg|gif|woff|woff2|ttf|eot|svg|swf)$/,
                loader: "file-loader",
                options: {
                  name: 'assets/[name]_[sha512:hash:base64:7].[ext]'
              }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("css/[name].css"),
        new HtmlWebpackPlugin({
          title: 'sale',
          template: path.resolve(
            process.cwd(),
            './index.html'),
        filename: 'sale.html',
        inject: true
        })
    ]
}