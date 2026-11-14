import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.oleaf0cxp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 12c2-5 7-5.5 12-3.5l5.5-3L19 12l1.5 6.5l-5.5-3C10 17.5 5 17 3 12m1.5 2.5V18m2.75-7.25h.01");
}
</style><path class="oleaf0cxp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:cod"} {...others} />);
}

export default Component;
