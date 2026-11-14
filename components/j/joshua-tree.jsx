import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c2_tgobvw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 20.5V7m0 8c-3.5 0-6-1.5-6-5m6 2.5c3.5 0 6.5-.5 6.5-3.5M10 4.5L12 7l2-2.5M12 7V4M4 7.5L6 10l2-2.5M6 10V7m10.5-.5l2 2.5l2-2.5m-2 2.5V6M4 20.5h16");
}
</style><path class="c2_tgobvw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:joshua-tree"} {...others} />);
}

export default Component;
