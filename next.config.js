module.exports = {
  output: 'export', // Ensures Next.js builds as a static site
  reactStrictMode: true,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.jsx$/,
      use: [
        {
          loader: 'import-glob-keyed',
        },
      ],
    });

    return config;
  },
  // Optional: Configure asset prefix if needed
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/your-repo-name/' : '',
};
