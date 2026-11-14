import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rshf6lb3w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 3.5h4a1.75 1.75 0 0 1 1.75 1.75v4A1.75 1.75 0 0 1 8.75 11h-4A1.75 1.75 0 0 1 3 9.25v-4A1.75 1.75 0 0 1 4.75 3.5m8.75 1H21M13.5 10H19M3 15.5h18m-18 5h13");
}
</style><path class="rshf6lb3w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:drop-cap"} {...others} />);
}

export default Component;
