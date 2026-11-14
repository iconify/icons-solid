import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bqh_wt-eb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 12h12a3.5 3.5 0 0 1 3.5 3.5v1A3.5 3.5 0 0 1 18 20H6a3.5 3.5 0 0 1-3.5-3.5v-1A3.5 3.5 0 0 1 6 12m.5 4h.01M10 16h.01m3.49 0h.01m2.99 0h1M9.879 7.879a3 3 0 0 1 4.242 0M7.757 5.757a6 6 0 0 1 8.486 0");
}
</style><path class="bqh_wt-eb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:modem"} {...others} />);
}

export default Component;
