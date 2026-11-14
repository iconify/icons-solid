import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ij9_ocejj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 11.5h19m-18-2.75V5.5a1.5 1.5 0 0 1 3 0v3.25m4 0V5.5a1.5 1.5 0 0 1 3 0v3.25m4 0V5.5a1.5 1.5 0 0 1 3 0v3.25m-9.75 5.5h2.5a2.25 2.25 0 0 1 2.25 2.25a2.25 2.25 0 0 1-2.25 2.25h-2.5A2.25 2.25 0 0 1 8.5 16.5a2.25 2.25 0 0 1 2.25-2.25m-1.25 4.5v2.75m5-2.75v2.75");
}
</style><path class="ij9_ocejj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:interview-panel"} {...others} />);
}

export default Component;
