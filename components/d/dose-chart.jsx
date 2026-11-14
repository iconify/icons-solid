import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.syhi5nbbp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 2.5V21h9.2m-5.7-5v-3.5M10 16V9m3.5 7V5.5m7.152 10.348za1.75 1.75 0 0 1 0 2.475l-2.829 2.829a1.75 1.75 0 0 1-2.475 0a1.75 1.75 0 0 1 0-2.475l2.829-2.829a1.75 1.75 0 0 1 2.475 0m-3.889 1.415l2.474 2.474");
}
</style><path class="syhi5nbbp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:dose-chart"} {...others} />);
}

export default Component;
