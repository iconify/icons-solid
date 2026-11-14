import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cj-1kgozt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 9c0-2.5 2-3.5 4-3.5h10c2 0 4 1 4 3.5v4c0 3.5-4 5.5-9 5.5s-9-2-9-5.5Zm5 0h.01M16 14.5h.01");
}
</style><path class="cj-1kgozt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:knee-slider"} {...others} />);
}

export default Component;
