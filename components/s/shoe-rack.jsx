import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zqhpg1x-z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 21.5v-19m17 19v-19M3.5 11h17m-17 9h17M7 11V6.5h2.5l2 2.25l4 .75q1 .25 1 1.5M7 20v-4.5h2.5l2 2.25l4 .75q1 .25 1 1.5");
}
</style><path class="zqhpg1x-z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:shoe-rack"} {...others} />);
}

export default Component;
