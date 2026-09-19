import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.j5gtq7b4i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.5 33.75c0-10.77-8.73-19.5-19.5-19.5S4.5 22.98 4.5 33.75");
}

.m9uuv3bbr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M37.5 33.75c0-7.456-6.044-13.5-13.5-13.5s-13.5 6.044-13.5 13.5");
}
</style><path class="j5gtq7b4i"/><path class="m9uuv3bbr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:auphonic-edit"} {...others} />);
}

export default Component;
