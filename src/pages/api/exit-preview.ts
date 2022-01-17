import { NextApiRequest, NextApiResponse } from 'next';

export default async (
  _: NextApiRequest,
  res: NextApiResponse
): Promise<any> => {
  res.clearPreviewData();
  res.writeHead(307, { Location: '/' });
  return res.end();
};
