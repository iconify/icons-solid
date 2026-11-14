import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xi9nm3bxa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 3v17M8 20h4.9M4.5 4.5h12M2 10l2.5-5.5L7 10a2.5 2.5 0 0 1-5 0m12 0l2.5-5.5L19 10a2.5 2.5 0 0 1-5 0m4.5 5l3 1.25v2.25c0 2-1.5 3-3 3.5c-1.5-.5-3-1.5-3-3.5v-2.25Z");
}
</style><path class="xi9nm3bxa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:defence-attorney"} {...others} />);
}

export default Component;
