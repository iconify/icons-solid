import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.e0a7q4b_v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35.65 43.5c-3.8-6.47-10.11-28.766-10.981-36.026");
}

.gnadfqc-z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.027 30.936c8.411-.151 23.94-3.63 31.946-7.592");
}

.z4kab2bxk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.489 41.541C12.07 33.858 20.805 13.639 26.386 4.5");
}
</style><path class="z4kab2bxk"/><path class="e0a7q4b_v"/><path class="gnadfqc-z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:anime-slayer"} {...others} />);
}

export default Component;
