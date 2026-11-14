import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.k2f7yibcp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 10.5l4.5 4.75a9 5.5 0 1 0-3.75.75ZM3 19q1.5-1.25 3 0t3 0m6 0q1.5-1.25 3 0t3 0");
}
</style><path class="k2f7yibcp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:lily-pad"} {...others} />);
}

export default Component;
