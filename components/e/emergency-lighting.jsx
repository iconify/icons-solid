import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mefccactq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 2.5h10A3.5 3.5 0 0 1 20.5 6A3.5 3.5 0 0 1 17 9.5H7A3.5 3.5 0 0 1 3.5 6A3.5 3.5 0 0 1 7 2.5M8 6h8m-4 6.5V21m-4.5-8.5L5 20m11.5-7.5L19 20");
}
</style><path class="mefccactq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:emergency-lighting"} {...others} />);
}

export default Component;
