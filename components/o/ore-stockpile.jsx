import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xwvq49n0t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 17.5L7.5 11A2 2 0 0 1 11 9a1.8 1.8 0 0 1 3.5.5A1.8 1.8 0 0 1 17 12l4.25 5.5m-18.75 0h19");
}
</style><path class="xwvq49n0t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:ore-stockpile"} {...others} />);
}

export default Component;
