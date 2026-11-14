import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bgp4wsbuj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 13V6.5m3 5.5V4.5m3 7.5V5m3 8V7.5m0 5.5v2.5c0 3-1.75 5-4.5 5c-2.5 0-4-1.25-5-3l-3-4.5M3 8.5l2 2M3.5 5L6 6");
}
</style><path class="bgp4wsbuj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:sign-language"} {...others} />);
}

export default Component;
