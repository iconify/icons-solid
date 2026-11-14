import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.s49wx7bpv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 19.5h19M5 19.5v-4A1.5 1.5 0 0 1 6.5 14h11a1.5 1.5 0 0 1 1.5 1.5v4m-8.75-14a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0M8.75 14v-1.25a3.25 2.75 0 0 1 6.5 0V14");
}
</style><path class="s49wx7bpv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:pedestrian-island"} {...others} />);
}

export default Component;
