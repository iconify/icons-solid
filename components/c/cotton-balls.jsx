import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.enayi_a3y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 4.25a2 2 0 0 1 4 0a2 2 0 0 1 2 3.5a2 2 0 0 1-2 3.5a2 2 0 0 1-4 0a2 2 0 0 1-2-3.5a2 2 0 0 1 2-3.5M5 15a1.5 1.5 0 0 1 3 0a1.5 1.5 0 0 1 1.5 2.5A1.5 1.5 0 0 1 8 20a1.5 1.5 0 0 1-3 0a1.5 1.5 0 0 1-1.5-2.5A1.5 1.5 0 0 1 5 15m11 0a1.5 1.5 0 0 1 3 0a1.5 1.5 0 0 1 1.5 2.5A1.5 1.5 0 0 1 19 20a1.5 1.5 0 0 1-3 0a1.5 1.5 0 0 1-1.5-2.5A1.5 1.5 0 0 1 16 15");
}
</style><path class="enayi_a3y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:cotton-balls"} {...others} />);
}

export default Component;
