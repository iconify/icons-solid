import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.a57828b9f {
  cx: 25.5px;
  cy: 21.3px;
  r: 2.9px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.hy_4mswxm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.653 45.104a19.736 19.736 0 0 0-18.2-27.52l.007.016a19.8 19.8 0 0 0-6.25 1.05");
}

.uzbmlgkqr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.35 2.846a19.713 19.713 0 0 0 24.45 26.47");
}
</style><circle class="a57828b9f"/><circle class="cpk0fnbgt"/><path class="uzbmlgkqr"/><path class="hy_4mswxm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:oo"} {...others} />);
}

export default Component;
