import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.zyc7sl1sb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.39 38.058L22.026 39.5L11.823 12.68l10.131-3.552c5.296-1.856 11.459.46 13.575 6.155c1.63 4.384.396 10.732-6.111 13.469L26.52 29.97z");
}
</style><circle class="cpk0fnbgt"/><path class="zyc7sl1sb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:param"} {...others} />);
}

export default Component;
