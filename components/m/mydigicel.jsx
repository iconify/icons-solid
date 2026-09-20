import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.hmsobbb4e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.235 18.23h27.53v10.505C37.765 36.332 31.597 42.5 24 42.5s-13.765-6.168-13.765-13.765z");
}

.izjd51byn {
  cx: 33.167px;
  cy: 8.01px;
  r: 2.51px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.tt91e44vn {
  cx: 14.833px;
  cy: 8.01px;
  r: 2.51px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="hmsobbb4e"/><circle class="tt91e44vn"/><circle class="izjd51byn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:mydigicel"} {...others} />);
}

export default Component;
