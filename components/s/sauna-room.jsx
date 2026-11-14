import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qbbkg0ctz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.982 9h8.036a1.75 1.75 0 0 1 1.736 1.967l-1.062 8.5A1.75 1.75 0 0 1 12.955 21h-5.91a1.75 1.75 0 0 1-1.737-1.533l-1.062-8.5A1.75 1.75 0 0 1 5.982 9M11.5 9l8-6.5M4.5 13h11M5 17.25h10");
}
</style><path class="qbbkg0ctz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:sauna-room"} {...others} />);
}

export default Component;
