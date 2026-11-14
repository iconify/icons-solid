import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wmlumabyn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12C3.75 9.75 5.25 8.75 7 8.75s3.25 1 4.5 3.25c-1.25 2.25-2.75 3.25-4.5 3.25s-3.25-1-4.5-3.25M7 12h.01m7.24 0h7.25M19 9.5l2.5 2.5l-2.5 2.5");
}
</style><path class="wmlumabyn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:gaze-ray"} {...others} />);
}

export default Component;
