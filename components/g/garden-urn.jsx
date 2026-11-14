import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d2r13nbex {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 11h14c0 4-3 6-5.5 6v2H16v2.5H8V19h2.5v-2C8 17 5 15 5 11m7 0V6m0 2c0-3 2-5 5-5c0 3-2 5-5 5m0 1.5C12 7 10 5 7 5c0 3 2 4.5 5 4.5");
}
</style><path class="d2r13nbex"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:garden-urn"} {...others} />);
}

export default Component;
