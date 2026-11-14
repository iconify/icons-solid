import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kq_edibta {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.25 21V10.5q0-5.5 2-7.5q2 2 2 7.5V21ZM10 21V10.5Q10 5 12 3q2 2 2 7.5V21Zm6.75 0V10.5q0-5.5 2-7.5q2 2 2 7.5V21Z");
}
</style><path class="kq_edibta"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:ammo-count"} {...others} />);
}

export default Component;
