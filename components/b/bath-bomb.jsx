import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.v-fg9axpu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 11.25a6 6 0 1 0 12 0a6 6 0 1 0-12 0M3 21q2.25-1.5 4.5 0t4.5 0t4.5 0t4.5 0M18 3.75a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0M15 2.5h.01");
}
</style><path class="v-fg9axpu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:bath-bomb"} {...others} />);
}

export default Component;
