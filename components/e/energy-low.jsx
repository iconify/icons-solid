import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qymz4029i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 4.5h3A3.5 3.5 0 0 1 17 8v10a3.5 3.5 0 0 1-3.5 3.5h-3A3.5 3.5 0 0 1 7 18V8a3.5 3.5 0 0 1 3.5-3.5m-.5-2h4M10 18h4");
}
</style><path class="qymz4029i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:energy-low"} {...others} />);
}

export default Component;
