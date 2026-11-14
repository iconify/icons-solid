import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eoz3zibrm {
  d: path("M4.5 2.5h15v19h-15Z");
}

.gghcu9x9r {
  d: path("M8 14.5v-4a4 4 0 0 1 8 0v4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uzx24gbgo {
  d: path("M10.75 14.5v-4a1.25 1.25 0 0 1 2.5 0v4M9 18h6");
}
</style><g class="ulnmmdpxh"><path class="eoz3zibrm"/><path class="gghcu9x9r"/><path class="uzx24gbgo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:fingerprint-scanner-police"} {...others} />);
}

export default Component;
