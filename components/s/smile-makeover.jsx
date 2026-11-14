import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.s7pp4wb4d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 10q9.5 2.5 19 0c-1 6.5-4.5 10-9.5 10s-8.5-3.5-9.5-10M4 15h16M9.5 11.25V15m5-3.75V15m4-12.75c.25 2.25.5 2.5 2.75 2.75c-2.25.25-2.5.5-2.75 2.75c-.25-2.25-.5-2.5-2.75-2.75c2.25-.25 2.5-.5 2.75-2.75");
}
</style><path class="s7pp4wb4d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:smile-makeover"} {...others} />);
}

export default Component;
