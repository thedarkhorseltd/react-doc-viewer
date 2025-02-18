"use client";
import DocViewer, { IDocument } from "../../../../";

import gifFile from "../../../../src/exampleFiles/gif-image.gif";
import pngFile from "../../../../src/exampleFiles/png-image.png";

const documents: IDocument[] = [{ uri: gifFile.src }, { uri: pngFile.src }];

export default function Home() {

  const viewerConfig = {
    header: {
      disableHeader: true,
    },
    pdfZoom: {
      defaultZoom: 1,
      zoomJump: 0.2,
      onZoomChange: (zoomLevel: any) => {
        console.log("Zoom changed to:", zoomLevel);
      },
    },
    pdfVerticalScrollByDefault: true,
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <DocViewer
            documents={[
              {
                uri: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
                fileName: "ummy.pdf",
              },
            ]}
            style={{height: '100%', overflow: 'hidden'}}
            config={viewerConfig}
          />
    </main>
  );
}
