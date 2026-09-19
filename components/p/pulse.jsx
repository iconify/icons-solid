import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.gxb44gqhn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M3.606 17.174A21.516 21.516 0 1 1 2.5 24h12.66l5.077 11.355l7.025-23.103L31.01 24h5.944");
}

.neb6k8bfv {
  cx: 38.944px;
  cy: 24px;
  r: 1.991px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="gxb44gqhn"/><circle class="neb6k8bfv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:pulse"} {...others} />);
}

export default Component;
