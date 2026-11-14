import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.q0keskb7v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m13.805 5.139l3.85 5.626a2.19 2.19 0 0 1 0 2.47l-3.85 5.626a2.188 2.188 0 0 1-3.61 0l-3.85-5.626a2.19 2.19 0 0 1 0-2.47l3.85-5.626a2.188 2.188 0 0 1 3.61 0");
}
</style><path class="q0keskb7v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:diamond-suit"} {...others} />);
}

export default Component;
