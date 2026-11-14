import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qhh-mlbpb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.172 20.5H4c-.6 0-1-.4-1-1c0-3.25 3.25-5.5 7.5-5.5c.86 0 1.679.092 2.438.266M6.5 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0m8 11a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0m2 0h3");
}
</style><path class="qhh-mlbpb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:avatar-busy"} {...others} />);
}

export default Component;
