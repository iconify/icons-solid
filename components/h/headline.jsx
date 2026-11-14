import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p5176gbjm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 3.5h12A3.5 3.5 0 0 1 21.5 7a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 7A3.5 3.5 0 0 1 6 3.5M6.5 7h11M3 15.5h18M3 20h11");
}
</style><path class="p5176gbjm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:headline"} {...others} />);
}

export default Component;
