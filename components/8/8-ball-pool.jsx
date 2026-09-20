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

.xakrkvy8r {
  cx: 24px;
  cy: 24px;
  r: 10px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.y9290ib5u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.269 24a2.25 2.25 0 0 0 0 4.5h1.462a2.25 2.25 0 0 0 0-4.5m0 0a2.25 2.25 0 0 0 0-4.5H23.27a2.25 2.25 0 0 0 0 4.5m-.001 0h1.462");
}
</style><circle class="cpk0fnbgt"/><path class="y9290ib5u"/><circle class="xakrkvy8r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:8-ball-pool"} {...others} />);
}

export default Component;
