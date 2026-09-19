import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.lq-f5-n-k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4 24h11.332m-1.199.006h6.252l2.259-8.43l3.991 14.897l1.735-6.476s1.846-3.883 4.088 0h11.484");
}

.mq6x3qbem {
  cx: 28.434px;
  cy: 24px;
  r: 15.566px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="mq6x3qbem"/><path class="lq-f5-n-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:caffeine-health"} {...others} />);
}

export default Component;
