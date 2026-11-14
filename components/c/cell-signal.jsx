import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ggrmccbhr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0m9.803-5.303a7.5 7.5 0 0 1 0 10.606m3.123-12.374a11 11 0 0 1 0 14.142m3.871-14.755a14.5 14.5 0 0 1 0 15.368");
}
</style><path class="ggrmccbhr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:cell-signal"} {...others} />);
}

export default Component;
