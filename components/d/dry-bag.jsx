import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qqnokgbqh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.25 3h9.5a2.75 2.75 0 0 1 2.75 2.75a2.75 2.75 0 0 1-2.75 2.75h-9.5A2.75 2.75 0 0 1 4.5 5.75A2.75 2.75 0 0 1 7.25 3M6 8.5V18a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V8.5M6 14h12");
}
</style><path class="qqnokgbqh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:dry-bag"} {...others} />);
}

export default Component;
