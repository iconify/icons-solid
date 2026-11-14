import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mpt1zubsm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 12a3.75 3.75 0 0 1 0-7a3.75 3.75 0 0 1 0 7a3.75 3.75 0 0 1 6 3.5a3.75 3.75 0 0 1-6-3.5a3.75 3.75 0 0 1-6 3.5a3.75 3.75 0 0 1 6-3.5m8.192-5.736a10 10 0 0 1 0 11.472");
}
</style><path class="mpt1zubsm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:fan-speed-low"} {...others} />);
}

export default Component;
