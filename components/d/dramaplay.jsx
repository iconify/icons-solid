import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.d1wno8k_f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.75 24H14a8.5 8.5 0 1 0 8.5 8.5V7m6.75 17H34a8.5 8.5 0 1 0-8.5-8.5V41");
}
</style><path class="d1wno8k_f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:dramaplay"} {...others} />);
}

export default Component;
