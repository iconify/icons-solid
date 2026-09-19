import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.dxx0-ftqn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.23 23.79a12 12 0 0 0 23.54 0");
}

.gx7tuob1t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 4.5a7.61 7.61 0 0 1 7.61 7.61v9.42A7.61 7.61 0 0 1 24 29.14h0a7.61 7.61 0 0 1-7.61-7.61v-9.42A7.61 7.61 0 0 1 24 4.5m2.94 28.65v9.71a.64.64 0 0 1-.63.64h-4.62a.64.64 0 0 1-.63-.64v-9.71");
}
</style><path class="gx7tuob1t"/><path class="dxx0-ftqn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:recorder"} {...others} />);
}

export default Component;
