import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.d5fdbg5le {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.5 4.5h19a4 4 0 0 1 0 8h-19a4 4 0 0 1 0-8m0 16.5h17a4 4 0 0 1 0 8h-17a4 4 0 0 1 0-8");
}

.f6eu3_b0t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.5 4.5c2.216 0 4 1.784 4 4V21m0 8v10.5c0 2.216-1.784 4-4 4s-4-1.784-4-4v-31");
}
</style><path class="d5fdbg5le"/><path class="f6eu3_b0t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:fanbox-viewer"} {...others} />);
}

export default Component;
