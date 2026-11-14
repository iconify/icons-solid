import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e5-5qgbku {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12h19l-2 4h-15Zm2 0V9.25a2.25 2.25 0 0 1 4.5 0V12m2.75 0V9.25a2.25 2.25 0 0 1 4.5 0V12M19 12V4.5M2.5 20q2.25-2.25 4.5 0t4.5 0t4.5 0t4.5 0");
}
</style><path class="e5-5qgbku"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:fpso"} {...others} />);
}

export default Component;
