import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.x1tjxz-vn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 12a1.5 5.5 0 1 0 3 0a1.5 5.5 0 1 0-3 0m5 0a1.5 5.5 0 1 0 3 0a1.5 5.5 0 1 0-3 0m5 0a1.5 5.5 0 1 0 3 0a1.5 5.5 0 1 0-3 0m-13 0h19");
}
</style><path class="x1tjxz-vn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:induction-heater"} {...others} />);
}

export default Component;
