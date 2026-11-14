import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yx_0bvsxt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 4.5a3.5 3.5 0 0 1 5 0a3.5 3.5 0 0 1 5 0a3.5 3.5 0 0 1 5 0a3.5 3.5 0 0 1 0 5a3.5 3.5 0 0 1 0 5a3.5 3.5 0 0 1 0 5a3.5 3.5 0 0 1-5 0a3.5 3.5 0 0 1-5 0a3.5 3.5 0 0 1-5 0a3.5 3.5 0 0 1 0-5a3.5 3.5 0 0 1 0-5a3.5 3.5 0 0 1 0-5M9 9h.01M15 9h.01M9 15h.01M15 15h.01");
}
</style><path class="yx_0bvsxt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:crackers"} {...others} />);
}

export default Component;
