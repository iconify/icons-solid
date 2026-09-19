import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ze0__-zxl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m25.819 5.5l-6.98 25.064h4.724L18.946 42.35l11.47-16.626h-5.033l4.337-11.2c7.698 1.145 11.05 7.409 8.706 14.47C36.079 36.06 28.81 42.5 19.073 42.5c-9.21 0-11.23-6.839-9.834-11.86L16.22 5.5z");
}
</style><path class="ze0__-zxl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:boosty"} {...others} />);
}

export default Component;
