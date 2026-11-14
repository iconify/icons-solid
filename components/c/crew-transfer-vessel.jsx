import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sqz0apbee {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 7h15L16 11H4.5ZM7 7V3h6.5l2 4m-13 7.5q2.5-2 5 0t5 0m5.5 2v5.25m0-5.25l1.75-3m-1.75 3l1.75 3m-1.75-3h-3.5");
}
</style><path class="sqz0apbee"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:crew-transfer-vessel"} {...others} />);
}

export default Component;
