import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m6bvkhuec {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 11.25h3.5A1.75 1.75 0 0 1 9.5 13v6.75a1.75 1.75 0 0 1-1.75 1.75h-3.5a1.75 1.75 0 0 1-1.75-1.75V13a1.75 1.75 0 0 1 1.75-1.75m12 0h3.5A1.75 1.75 0 0 1 21.5 13v6.75a1.75 1.75 0 0 1-1.75 1.75h-3.5a1.75 1.75 0 0 1-1.75-1.75V13a1.75 1.75 0 0 1 1.75-1.75M4.5 6h15M17 3.5L19.5 6L17 8.5");
}
</style><path class="m6bvkhuec"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:lateral-move"} {...others} />);
}

export default Component;
