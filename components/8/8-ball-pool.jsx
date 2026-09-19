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

.s-76gmbrm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.269 24a2.25 2.25 0 0 0-2.25 2.25h0a2.25 2.25 0 0 0 2.25 2.25h1.462a2.25 2.25 0 0 0 2.25-2.25h0a2.25 2.25 0 0 0-2.25-2.25m0 0a2.25 2.25 0 0 0 2.25-2.25h0a2.25 2.25 0 0 0-2.25-2.25H23.27a2.25 2.25 0 0 0-2.25 2.25h0A2.25 2.25 0 0 0 23.27 24m-.001 0h1.462");
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
</style><circle class="cpk0fnbgt"/><path class="s-76gmbrm"/><circle class="xakrkvy8r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:8-ball-pool"} {...others} />);
}

export default Component;
