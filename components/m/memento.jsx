import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.e9sqz_boh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 10.81v23.5l-8.19 8.19H9.6V10.81z");
}

.m4stwzb5m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.6 36.49H5.5V5.5h32.18v5.31m-23.063 5.722h22m-22 9.915h22m-22-4.958h11.191m-11.191 9.915h11.191M20.68 36.36h-1.96m6.07 0h-1.98m-6.21 0h-1.98m19.694 6.14v-8.186H42.5");
}
</style><path class="e9sqz_boh"/><path class="m4stwzb5m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:memento"} {...others} />);
}

export default Component;
