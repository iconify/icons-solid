import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.rane0i_8f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31 8.13V22a7 7 0 0 1-4 6.27V4.5h-6v23.81A7 7 0 0 1 17 22V8.13l-6 3.24V22a13 13 0 0 0 10 12.64v8.86h6v-8.87A13 13 0 0 0 37 22V11.37Z");
}
</style><path class="rane0i_8f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:posidonlauncher"} {...others} />);
}

export default Component;
