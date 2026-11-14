import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.go-v5fbte {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 7.5h3A3.5 3.5 0 0 1 17 11v2a3.5 3.5 0 0 1-3.5 3.5h-3A3.5 3.5 0 0 1 7 13v-2a3.5 3.5 0 0 1 3.5-3.5m-8 4.5H7M4.75 9.75L7 12l-2.25 2.25M21.5 12H17m2.25-2.25L17 12l2.25 2.25");
}
</style><path class="go-v5fbte"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:gas-compressor"} {...others} />);
}

export default Component;
