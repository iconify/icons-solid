import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.psij4obcz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 2.5v18h8.75M6 17.5V12m2.75 5.5V7m2.75 10.5V10m4.75 5h4A1.75 1.75 0 0 1 22 16.75v3a1.75 1.75 0 0 1-1.75 1.75h-4a1.75 1.75 0 0 1-1.75-1.75v-3A1.75 1.75 0 0 1 16.25 15m-1.75 2.75H22m-5.25-4.25V16m3-2.5V16");
}
</style><path class="psij4obcz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:consumption-daily"} {...others} />);
}

export default Component;
