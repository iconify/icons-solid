import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e3l8nzhso {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4 6.5l1 13A1.5 1.5 0 0 0 6.5 21h3a1.5 1.5 0 0 0 1.5-1.5l1-13m-9.5 0h11M6.5 4h3M14 14h7m-2.5-2.5L21 14l-2.5 2.5");
}
</style><path class="e3l8nzhso"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:take-out-trash"} {...others} />);
}

export default Component;
