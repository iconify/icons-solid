import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.no4zmcbvc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 2.5h13A2.5 2.5 0 0 1 21 5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 5a2.5 2.5 0 0 1 2.5-2.5m.5 5V21l2-1.25L10 21l2-1.25L14 21l2-1.25L18 21V7.5M9 11h6m-6 4h4");
}
</style><path class="no4zmcbvc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:receipt-roll"} {...others} />);
}

export default Component;
