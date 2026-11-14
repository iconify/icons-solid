import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f5fparmnc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M21 15c-3-5-10.5-5-13.5 0L3 11v8l4.5-4c3 5 10.5 5 13.5 0m-6.5-8a2 2 0 1 0 4 0a2 2 0 1 0-4 0M19 3h.01M17.5 14.5h.01");
}
</style><path class="f5fparmnc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:fish-bubbles"} {...others} />);
}

export default Component;
