import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kppsj0b_o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 7.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0M6.5 21c0-3.5 2.5-6.5 5.5-6.5s5.5 3 5.5 6.5m-15-10.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m0 9c0-2.25 1.25-4 3-4m11.75-5a2 2.5 0 1 0 4 0a2 2.5 0 1 0-4 0m4.25 9c0-2.25-1.25-4-3-4");
}
</style><path class="kppsj0b_o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:cultural-diversity"} {...others} />);
}

export default Component;
