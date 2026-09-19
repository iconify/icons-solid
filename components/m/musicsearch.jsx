import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.go2lvd97x {
  cx: 24px;
  cy: 24px;
  r: 3.375px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.juk8y_yjp {
  cx: 24px;
  cy: 24px;
  r: 7.313px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.vylxvh-0p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.375 24V8.616m1.796 20.555l7.557 7.557");
}
</style><circle class="go2lvd97x"/><circle class="juk8y_yjp"/><circle class="cpk0fnbgt"/><path class="vylxvh-0p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:musicsearch"} {...others} />);
}

export default Component;
