import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zsnwdrbpn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 21.5C7 13 11 6 20 3M7 16.5l-4.5-3m4.5 3l4.5-1m-2.75-3.25L5 8.5m3.75 3.75L13 11.5m-1.5-3.25l-2-3.75m2 3.75l3.5.25m.25-3.25L14 2.5m1.25 2.75l2.75 1");
}
</style><path class="zsnwdrbpn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:bracken"} {...others} />);
}

export default Component;
