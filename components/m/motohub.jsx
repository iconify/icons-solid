import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.enyy7pb_g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36 30H12a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h24a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1m1-4V12a1 1 0 0 0-1-1h-9.25a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1H36a1 1 0 0 0 1-1m-14.75-9.5V12a1 1 0 0 0-1-1h-9.252a1 1 0 0 0-1 1v4.5a1 1 0 0 0 1 1h9.251a1 1 0 0 0 1-1m.001 9.75v-4.5a1 1 0 0 0-1-1h-9.252a1 1 0 0 0-1 1v4.5a1 1 0 0 0 1 1h9.251a1 1 0 0 0 1-1");
}

.i9clfwm2k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4");
}
</style><path class="i9clfwm2k"/><path class="enyy7pb_g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:motohub"} {...others} />);
}

export default Component;
