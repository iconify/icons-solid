import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qx2cinioz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 21.5V16H8v-4.5h8V14h5.5v7.5ZM8 16v5.5m8-7.5v7.5M12.75 2.433l1.315.759a1.5 1.5 0 0 1 .75 1.299v1.518a1.5 1.5 0 0 1-.75 1.299l-1.315.759a1.5 1.5 0 0 1-1.5 0l-1.315-.759a1.5 1.5 0 0 1-.75-1.299V4.491a1.5 1.5 0 0 1 .75-1.299l1.315-.759a1.5 1.5 0 0 1 1.5 0");
}
</style><path class="qx2cinioz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:leaderboard-web3"} {...others} />);
}

export default Component;
