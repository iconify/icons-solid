import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.j3s9ivbxi {
  width: 37px;
  height: 37px;
  x: 5.5px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}

.zqtwbwkjt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36.5 28.859c0-2.558-2.204-4.63-4.923-4.63s-4.923 2.072-4.923 4.63v3.01c0 2.558 2.204 4.631 4.923 4.631s4.923-2.073 4.923-4.63m0 4.63V17.976");
}
</style><rect class="j3s9ivbxi"/><path class="zqtwbwkjt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:deploygate"} {...others} />);
}

export default Component;
