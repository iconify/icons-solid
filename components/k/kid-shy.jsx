import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nethoparn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15.5 2.5H18A3.5 3.5 0 0 1 21.5 6v12a3.5 3.5 0 0 1-3.5 3.5h-2.5A3.5 3.5 0 0 1 12 18V6a3.5 3.5 0 0 1 3.5-3.5M12 5.25a7 7 0 1 0 0 13.5M8.5 11h.01");
}
</style><path class="nethoparn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:kid-shy"} {...others} />);
}

export default Component;
