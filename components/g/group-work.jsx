import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.q9_b8kbvp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 7a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m10 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m-5 9a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0M3 13c0-1.5 1.5-2 4-2c1 0 2 .2 2.5.5M21 13c0-1.5-1.5-2-4-2c-1 0-2 .2-2.5.5m-6 10c0-1.5 1.5-2 3.5-2s3.5.5 3.5 2");
}
</style><path class="q9_b8kbvp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:group-work"} {...others} />);
}

export default Component;
