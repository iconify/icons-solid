import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eudd8tbzn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.5 8.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 1 1 3 0M10 7V2.5M8.75 9.25l-4 2.25m6.5-2.25l4 2.25M10 10v11.5m-2.5 0h5m5.5-7V18m0 3h.01");
}
</style><path class="eudd8tbzn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:wind-turbine-alert"} {...others} />);
}

export default Component;
