import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zo54w4arj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 2.5h7V5H18v5.5h-2.5V13H19v4h-3v4.5h-2.5v-4h-3v4H8V17H5v-4h3.5v-2.5H6V5h2.5ZM9 7.75h6");
}
</style><path class="zo54w4arj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:pixel-character"} {...others} />);
}

export default Component;
