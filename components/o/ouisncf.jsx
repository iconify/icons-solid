import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.vcrzmx-8b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.25 35.37H32.6a14.25 14.25 0 1 0-17.2 0H5.76a21.5 21.5 0 1 1 36.49 0");
}
</style><path class="vcrzmx-8b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:ouisncf"} {...others} />);
}

export default Component;
