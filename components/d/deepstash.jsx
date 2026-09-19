import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.cc03oz4qv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.704 10.545h25.75v25.751M42.5 31.25L31.25 42.5m-14.5-37L5.5 16.75");
}

.jqqij7_6x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.75 5.5H42.5v25.75");
}

.mb1_idbxc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 16.75h25.75V42.5H5.5Z");
}

.oacbwoboh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.831 13.418h25.751v25.75");
}

.qj41m8bpd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.239 8.01h25.75v25.751");
}
</style><path class="qj41m8bpd"/><path class="jqqij7_6x"/><path class="mb1_idbxc"/><path class="oacbwoboh"/><path class="cc03oz4qv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:deepstash"} {...others} />);
}

export default Component;
