import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g62sjn4zc {
  d: path("M3 10h18v10.5H3Zm0 0a9 6 0 0 1 18 0M3 14.5h18");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vwk13s-_u {
  d: path("M10.5 13h3v4.5h-3Z");
}
</style><g class="ulnmmdpxh"><path class="g62sjn4zc"/><path class="vwk13s-_u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:rewards-chest"} {...others} />);
}

export default Component;
