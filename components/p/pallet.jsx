import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.y3pug9hpa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 15h16a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 20 18H4a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 4 15m1 3v3m7-3v3m7-3v3");
}
</style><path class="y3pug9hpa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:pallet"} {...others} />);
}

export default Component;
