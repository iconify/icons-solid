import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l26-6vbjr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 8.5a9 5.5 0 1 0 18 0a9 5.5 0 1 0-18 0m9 5.5v1.75m-3 3a3 3 0 1 0 6 0a3 3 0 1 0-6 0m3 0h.01");
}
</style><path class="l26-6vbjr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:anklet"} {...others} />);
}

export default Component;
