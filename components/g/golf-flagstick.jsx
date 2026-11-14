import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p9i492b7j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 19.25a5.5 2.25 0 1 0 11 0a5.5 2.25 0 1 0-11 0M10.5 2.5v16.75m2.057-15.927l1.961.784a1.5 1.5 0 0 1 0 2.786l-1.961.784A1.5 1.5 0 0 1 10.5 6.284V4.716a1.5 1.5 0 0 1 2.057-1.393");
}
</style><path class="p9i492b7j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:golf-flagstick"} {...others} />);
}

export default Component;
