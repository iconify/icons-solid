import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.jzvgi1bpu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M39.217 32.106L24.012 16.868l-15.234 15.2");
}

.o8myn5lxo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m34.934 36.374l-10.92-10.945l-10.958 10.933");
}

.s8wvgk0hj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.62 39.693L43.5 27.84L24.01 8.307L4.5 27.775l11.89 11.916Z");
}
</style><path class="s8wvgk0hj"/><path class="jzvgi1bpu"/><path class="o8myn5lxo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:openworkout"} {...others} />);
}

export default Component;
