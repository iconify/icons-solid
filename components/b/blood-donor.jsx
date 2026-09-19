import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.babe14szl {
  cx: 24px;
  cy: 35.983px;
  r: 7.517px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.g0ug28b6c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.347 29.352c-3.907-1.723-5.02-5.993-5.02-7.977c0-5.106 7.81-15.773 8.601-16.84c.035-.047.094-.047.129 0c.79 1.07 8.615 11.78 8.615 16.84c0 1.544-.953 6.163-4.893 7.977");
}

.yus9qngim {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.448 35.915h9.104m-4.572 4.561v-9.104");
}
</style><path class="g0ug28b6c"/><circle class="babe14szl"/><path class="yus9qngim"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:blood-donor"} {...others} />);
}

export default Component;
