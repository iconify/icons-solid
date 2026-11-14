import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rb8r731yl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.25 2.5L5.75 14m6.5-11.5L10.75 14M3.5 6.25h11.25M3 10.25h11.25M2.5 19.5h1.25m2.75 0h1.25m2.75 0h1.25m3.75-2.25L18 15l2.5 2.25m-5.75 0h6.5m-4.75 0V21m3-3.75V21m-4.75.25h6.5");
}
</style><path class="rb8r731yl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:bank-routing-number"} {...others} />);
}

export default Component;
