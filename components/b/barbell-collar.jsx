import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dhbflkxxq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12.5H13m5 0h3.5m-6-5zA2.5 2.5 0 0 1 18 10v5a2.5 2.5 0 0 1-2.5 2.5A2.5 2.5 0 0 1 13 15v-5a2.5 2.5 0 0 1 2.5-2.5m0 0v-3H19");
}
</style><path class="dhbflkxxq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:barbell-collar"} {...others} />);
}

export default Component;
