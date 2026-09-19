import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.f06kb525m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 46.538V33.012H9.873V26.97h6.166v-8.44A7.96 7.96 0 0 1 24 10.566h0v-7.03");
}

.f8gkixb4s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.62 35.788v-21.5L24 3.538L5.38 14.288v21.5L24 46.538z");
}
</style><path class="f8gkixb4s"/><path class="f06kb525m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:de-bijenkorf"} {...others} />);
}

export default Component;
