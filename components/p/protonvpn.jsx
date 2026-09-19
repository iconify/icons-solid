import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.g_alwmbrj {
  cx: 28.41px;
  cy: 39.12px;
  r: 4.38px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.iyxmt8bju {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m13.19 20.78l12.06 15.31m-10.58-19.8l18.7-5.93m2.92 2.7l-6.45 21.93");
}

.rcnhbnb1n {
  cx: 10.44px;
  cy: 17.38px;
  r: 4.38px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.v7hd9h3jb {
  cx: 37.56px;
  cy: 8.88px;
  r: 4.38px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="rcnhbnb1n"/><circle class="v7hd9h3jb"/><circle class="g_alwmbrj"/><path class="iyxmt8bju"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:protonvpn"} {...others} />);
}

export default Component;
