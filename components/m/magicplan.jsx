import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.btpo_d5uv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.5 42.5h6a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h6");
}

.wgiys0-bs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 30.956v-8.662c0-2.9-2.35-5.25-5.25-5.25h0a5.25 5.25 0 0 0-5.25 5.25m21 8.662v-8.662c0-2.9-2.35-5.25-5.25-5.25h0a5.25 5.25 0 0 0-5.25 5.25m-10.5 8.662V17.044");
}
</style><path class="btpo_d5uv"/><path class="wgiys0-bs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:magicplan"} {...others} />);
}

export default Component;
