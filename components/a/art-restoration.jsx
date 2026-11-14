import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dyay0-bzv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m9.25 12.25l2-2C13 7.5 16.5 5.5 19.5 4.5c-1 3-3 6.5-5.75 8.25l-2 2Zm2-2l2.5 2.5m-3.25.75l-6 6m2-16l.75 2.25l2.25.75l-2.25.75L6.5 9.5l-.75-2.25L3.5 6.5l2.25-.75Z");
}
</style><path class="dyay0-bzv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:art-restoration"} {...others} />);
}

export default Component;
