import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.b1oozq56r {
  cx: 24px;
  cy: 18.54px;
  r: 9.36px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.p0zb0wb8d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.64 18.54V43.5m4.68 0V31.78c1.464.518 3.039.8 4.68.8c7.754 0 14.04-6.286 14.04-14.04S31.754 4.5 24 4.5S9.96 10.786 9.96 18.54V43.5");
}
</style><circle class="b1oozq56r"/><path class="p0zb0wb8d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:pixel-icon-pack"} {...others} />);
}

export default Component;
