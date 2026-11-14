import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rgu-0rwhz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.25 13a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m3-8a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m8-1.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m5 6a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m-3 8a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m4 1.75L21 21");
}
</style><path class="rgu-0rwhz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:constellation-search"} {...others} />);
}

export default Component;
