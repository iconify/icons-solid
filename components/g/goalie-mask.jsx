import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xri3uec5v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 9c0-4.25 3-6.5 7-6.5s7 2.25 7 6.5v5c0 4.5-3 7.5-7 7.5s-7-3-7-7.5Zm2.75 2h8.5M8 15h8m-6.25-4v7.75m4.5-7.75v7.75");
}
</style><path class="xri3uec5v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:goalie-mask"} {...others} />);
}

export default Component;
