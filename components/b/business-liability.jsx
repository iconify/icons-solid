import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vc2dpuroe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 3v16.5m-3.5 0h5.75M4.5 4.5h11M2 9l2.5-4.5L7 9a2.5 2.5 0 0 1-5 0m11 0l2.5-4.5L18 9a2.5 2.5 0 0 1-5 0m3.75 7.25h3.5A1.75 1.75 0 0 1 22 18v1.75a1.75 1.75 0 0 1-1.75 1.75h-3.5A1.75 1.75 0 0 1 15 19.75V18a1.75 1.75 0 0 1 1.75-1.75m.25 0V14.5h3v1.75");
}
</style><path class="vc2dpuroe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:business-liability"} {...others} />);
}

export default Component;
