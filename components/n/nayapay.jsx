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

.z3-6b_bqd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 14.5a9.5 9.5 0 0 0-9.5 9.5v11.04a.5.5 0 0 0 .742.438l1.412-.78A9.6 9.6 0 0 1 21.3 33.5H24a9.5 9.5 0 0 0 0-19");
}
</style><circle class="cpk0fnbgt"/><path class="z3-6b_bqd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:nayapay"} {...others} />);
}

export default Component;
