import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ism2xfb9x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.823 3h4.354a1.5 1.5 0 0 1 1.265.695l2.698 4.24a1.5 1.5 0 0 1 .179 1.21l-3.012 10.759A1.5 1.5 0 0 1 13.862 21h-3.724a1.5 1.5 0 0 1-1.445-1.096L5.681 9.145a1.5 1.5 0 0 1 .179-1.21l2.698-4.24A1.5 1.5 0 0 1 9.823 3M12 8v7m-2.5-4.5h5");
}
</style><path class="ism2xfb9x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:life-funeral-cover"} {...others} />);
}

export default Component;
