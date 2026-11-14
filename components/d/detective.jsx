import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l3thlrbtp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m7 8l.75-4c.15-.75.75-1.25 1.5-1L12 4l2.75-1c.75-.25 1.35.25 1.5 1L17 8M3.5 8h17m-12 0v2.5a3.5 3.5 0 0 0 7 0V8m-11 13.5C4.5 19 7.75 17 12 17s7.5 2 7.5 4.5");
}
</style><path class="l3thlrbtp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:detective"} {...others} />);
}

export default Component;
