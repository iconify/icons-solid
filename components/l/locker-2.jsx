import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.h9t7uuebx {
  cx: 9.962px;
  cy: 24px;
  r: 4.956px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.zm6zq-i4f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.918 24h13.536m-2.772 2.349V24m-6.605 2.5v13.542a3.46 3.46 0 0 0 3.458 3.458h17a3.46 3.46 0 0 0 3.459-3.458V7.958A3.46 3.46 0 0 0 39.535 4.5h-17a3.46 3.46 0 0 0-3.458 3.458V21.5m-.001-12.005h23.918m-23.918 29.01h23.918");
}
</style><circle class="h9t7uuebx"/><path class="zm6zq-i4f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:locker-2"} {...others} />);
}

export default Component;
