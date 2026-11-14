import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nk3k5vvyc {
  d: path("M3.5 10.5L12 3.25l8.5 7.25v1.75h-8.25v8.25H3.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ycubixbcz {
  d: path("M5.75 14.5H10v6H5.75Zm0 0l4.25 6m0-6l-4.25 6M18 14.75L21 16v2.25c0 1.75-1.25 2.75-3 3.5c-1.75-.75-3-1.75-3-3.5V16Z");
}
</style><g class="ulnmmdpxh"><path class="nk3k5vvyc"/><path class="ycubixbcz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:business-farm-cover"} {...others} />);
}

export default Component;
