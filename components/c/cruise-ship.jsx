import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.k8_ixozgm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 14h18l-2.5 6h-13Zm5.75-6h6.5A1.75 1.75 0 0 1 17 9.75v2.5A1.75 1.75 0 0 1 15.25 14h-6.5A1.75 1.75 0 0 1 7 12.25v-2.5A1.75 1.75 0 0 1 8.75 8M12 8V4.5");
}
</style><path class="k8_ixozgm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:cruise-ship"} {...others} />);
}

export default Component;
