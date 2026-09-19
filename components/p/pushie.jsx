import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.a7qbsxbqt {
  cx: 16.78px;
  cy: 33.362px;
  r: 3.138px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.bz_64mwtv {
  cx: 23.571px;
  cy: 26.349px;
  r: 3.138px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.j3s9ivbxi {
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

.u_-m-cyyv {
  fill: none;
  stroke: currentColor;
  stroke-miterlimit: 7;
  d: path("M16.686 30.224v-12.41c0-10.608 18.429-9.117 17.649.865c-.565 7.225-5.217 7.08-7.58 7.418");
}
</style><circle class="a7qbsxbqt"/><circle class="bz_64mwtv"/><path class="u_-m-cyyv"/><rect class="j3s9ivbxi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:pushie"} {...others} />);
}

export default Component;
