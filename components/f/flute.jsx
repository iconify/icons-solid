import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a6eym7job {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.045 16.419L16.419 4.045a2.5 2.5 0 0 1 3.536 0a2.5 2.5 0 0 1 0 3.536L7.581 19.955a2.5 2.5 0 0 1-3.536 0a2.5 2.5 0 0 1 0-3.536M15.25 8.75l1.5-1.5M7 17h.01m2.24-2.25h.01m2.24-2.25h.01");
}
</style><path class="a6eym7job"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:flute"} {...others} />);
}

export default Component;
