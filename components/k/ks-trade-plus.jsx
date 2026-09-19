import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.byflq7tpi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m4.5 36.724l5.377-8.89l6.305 8.89l9.216-15.237l2.466 15.237l15.264-25.235");
}

.g110113rk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m43.5 21.645l-.38-10.369l-9.017 4.793");
}
</style><path class="g110113rk"/><path class="byflq7tpi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:ks-trade-plus"} {...others} />);
}

export default Component;
