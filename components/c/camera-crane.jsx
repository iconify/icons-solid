import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eej27zbip {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M18.25 2.5h1.5a1.75 1.75 0 0 1 1.75 1.75v1A1.75 1.75 0 0 1 19.75 7h-1.5a1.75 1.75 0 0 1-1.75-1.75v-1a1.75 1.75 0 0 1 1.75-1.75M4 17l13.5-8.5m-8 5V21M6 21h7m-9-5.5zA1.5 1.5 0 0 1 5.5 17v1A1.5 1.5 0 0 1 4 19.5A1.5 1.5 0 0 1 2.5 18v-1A1.5 1.5 0 0 1 4 15.5");
}
</style><path class="eej27zbip"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:camera-crane"} {...others} />);
}

export default Component;
