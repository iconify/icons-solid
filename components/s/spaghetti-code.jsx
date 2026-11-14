import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gmpdc4b_h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 17C6 17 6 7 10 7s4 8 1 8s-2-9.5 3-9.5c4.5 0 4.5 7.5 2 7.5s-1-4.5 5.5-4.5M3.5 20C9 20 13 17.5 21 20");
}
</style><path class="gmpdc4b_h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:spaghetti-code"} {...others} />);
}

export default Component;
