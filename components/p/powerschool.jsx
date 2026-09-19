import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.joyxvxnil {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.81 23.752a5.458 5.458 0 1 0 0-10.916V8.668a9.626 9.626 0 0 1 0 19.252v4.168a13.794 13.794 0 0 0 0-27.588h-5.395v39h-5.01v-39H9.397v39");
}
</style><path class="joyxvxnil"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:powerschool"} {...others} />);
}

export default Component;
