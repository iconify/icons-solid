import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.d1wtze3dq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.6 28V9.3a4.74 4.74 0 0 0-4.13-4.79a4.61 4.61 0 0 0-5.07 4.57V28a1 1 0 0 1-.4.8a8.19 8.19 0 1 0 10 0a1 1 0 0 1-.4-.8");
}

.iybhsib-a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.4 26.18c2.17-1.16 4.37-.64 6-.42a7.9 7.9 0 0 0 3.2-.32");
}
</style><path class="d1wtze3dq"/><path class="iybhsib-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:tempmonitor"} {...others} />);
}

export default Component;
