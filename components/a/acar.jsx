import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.g4rl4qbvf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m33.935 23.32l-8.269 2.298a3.16 3.16 0 0 0-3.09-.147a3.174 3.174 0 0 0 2.848 5.674a3.16 3.16 0 0 0 1.73-2.567z");
}

.m5am5nbgd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 33.75c0-10.77 8.73-19.5 19.5-19.5s19.5 8.73 19.5 19.5z");
}
</style><path class="m5am5nbgd"/><path class="g4rl4qbvf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:acar"} {...others} />);
}

export default Component;
