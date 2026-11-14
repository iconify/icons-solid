import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g2ps8jbse {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m11 14.25l-7-5.5l4-5.5l7.25 5.25M3 21h18m-10 0q5-7.5 10 0m-7-7.5h.01m3.49-1h.01");
}
</style><path class="g2ps8jbse"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:holi-color-powder"} {...others} />);
}

export default Component;
