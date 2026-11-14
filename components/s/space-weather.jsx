import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yjl3s_btz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 7a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m12 12a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0M7 4.5v-2M4.5 7h-2m2.75-1.75l-1.5-1.5M11 11q2.5-.5 2 2t2 2");
}
</style><path class="yjl3s_btz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:space-weather"} {...others} />);
}

export default Component;
