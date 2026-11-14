import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vsgflqb7x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 7.5h10A2.5 2.5 0 1 0 11 5m-7.5 7h17M18 9.5l2.5 2.5l-2.5 2.5m-14.5 2h11A2.5 2.5 0 1 1 12 19");
}
</style><path class="vsgflqb7x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:wind-arrow"} {...others} />);
}

export default Component;
