import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.lfoz0uobk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M39.5 43.5v-35c0-2.216-1.784-4-4-4h-23c-2.216 0-4 1.784-4 4v35");
}

.qid__5x5m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 28L8.5 43.5h31z");
}

.tnhz5ct0x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.5 38.5v-29h21v29");
}
</style><path class="lfoz0uobk"/><path class="tnhz5ct0x"/><path class="qid__5x5m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:portaphone"} {...others} />);
}

export default Component;
