import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ik16w_bzd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12a9.5 9.5 0 0 1 19 0a2.5 2.5 0 0 0-4.75 0A2.5 2.5 0 0 0 12 12a2.5 2.5 0 0 0-4.75 0a2.5 2.5 0 0 0-4.75 0m9.5 0v7a1.75 1.75 0 0 1-3.5 0");
}
</style><path class="ik16w_bzd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:golf-umbrella"} {...others} />);
}

export default Component;
