import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.y09skub7p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.727 43.5L20.758 37l8.97-6.5l-8.97-6.5l8.97-6.5l-8.97-6.5l8.97-6.5zM20.758 37V11m0 0l-8.485 6.15h8.485");
}
</style><path class="y09skub7p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:one-app"} {...others} />);
}

export default Component;
