import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.f8_wwm-cz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.632 37.718V12.821s10.984-6.59 18.307 1.464m0 0v23.433m0-23.433c1.345-1.957 4.506-4.003 8.787-4.003c8.202 0 9.906 5.773 9.906 11.313v16.123");
}
</style><path class="f8_wwm-cz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:muun"} {...others} />);
}

export default Component;
