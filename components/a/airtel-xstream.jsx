import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.seujh6qpm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m20.017 22.189l2.968 2.968l-3.08 3.08l-3.036-3.036Z");
}

.x699ewbqd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M40.112 42.5h-5.725L19.87 27.985l-5.71 5.708H8.585l8.563-8.562L5.71 13.695h5.766l8.542 8.54L36.756 5.5h5.534L22.695 25.093Z");
}
</style><path class="x699ewbqd"/><path class="seujh6qpm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:airtel-xstream"} {...others} />);
}

export default Component;
