import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.st92621wt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.41 11c5.3-.29 10.8 2.76 12.63 9.75c10.38 1.41 9.49 15.3.06 16.27H13.28c-10.95-1.47-12.44-17.4 0-19.54A12 12 0 0 1 23.41 11m0 0");
}
</style><path class="st92621wt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:forecastie"} {...others} />);
}

export default Component;
