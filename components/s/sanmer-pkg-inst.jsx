import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.pv1_txpnx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.437 39.718V10.435h-4.62a2.316 2.316 0 1 1-.001-4.632h32.368a2.316 2.316 0 1 1 0 4.632h-4.632v29.283a2.316 2.316 0 1 1-4.621 0l.332-29.283H17.058v29.283a2.316 2.316 0 1 1-4.621 0");
}
</style><path class="pv1_txpnx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:sanmer-pkg-inst"} {...others} />);
}

export default Component;
