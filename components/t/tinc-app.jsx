import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.eemiiacod {
  cx: 30.547px;
  cy: 10.596px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 5.317px;
  ry: 5.356px;
}

.ivvufub2u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m35.898 32.213l-4.066-16.426M15.926 31.265l16.149 4.664m-5.351-21.614L14.639 26.071");
}

.q1c780btn {
  cx: 37.183px;
  cy: 37.404px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 5.317px;
  ry: 5.356px;
}

.z7j9ecc7n {
  cx: 10.817px;
  cy: 29.789px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 5.317px;
  ry: 5.356px;
}
</style><path class="ivvufub2u"/><ellipse class="q1c780btn"/><ellipse class="eemiiacod"/><ellipse class="z7j9ecc7n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:tinc-app"} {...others} />);
}

export default Component;
