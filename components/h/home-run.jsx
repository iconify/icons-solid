import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.v_v5qhujt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 16.5h18m-16.5-3v8m7.5-8v8m7.5-8v8M13 6a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0M3 10.5q2-5 7-5.75");
}
</style><path class="v_v5qhujt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:home-run"} {...others} />);
}

export default Component;
