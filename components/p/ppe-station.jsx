import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.swf7gnbxb {
  d: path("M3.5 2.5h17v19h-17Zm0 4.5h17");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yb79v5xdl {
  d: path("M6.5 16.5h1a4.5 4.5 0 0 1 9 0h1Z");
}
</style><g class="ulnmmdpxh"><path class="swf7gnbxb"/><path class="yb79v5xdl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:ppe-station"} {...others} />);
}

export default Component;
