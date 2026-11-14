import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cy_ch5b9r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.25 16H20.5M3.75 16a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0M3.5 7.5l2.25 2.25L10 5.5");
}
</style><path class="cy_ch5b9r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:ces-effort"} {...others} />);
}

export default Component;
