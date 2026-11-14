import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.x15cxvi1d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 7c0 8 4 12 9.5 12s9.5-4 9.5-12A2.75 2.75 0 0 0 16 7c0 3.5-1.5 6.25-4 6.25S8 10.5 8 7a2.75 2.75 0 0 0-5.5 0m5.75 2.5l-5 2.75m7 .5l-2 5.5m7.5-8.75l5 2.75m-7 .5l2 5.5");
}
</style><path class="x15cxvi1d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:teeth-arch-lower"} {...others} />);
}

export default Component;
