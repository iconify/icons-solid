import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n917cebxf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 10h10a3.5 3.5 0 0 1 3.5 3.5v4A3.5 3.5 0 0 1 17 21H7a3.5 3.5 0 0 1-3.5-3.5v-4A3.5 3.5 0 0 1 7 10m-1.5 0L12 8l6.5 2M12 8V6.5a2 2 0 1 0-2-2M3.5 14h17");
}
</style><path class="n917cebxf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:clothes-delivery-box"} {...others} />);
}

export default Component;
