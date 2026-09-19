import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.aqljibbxb {
  cx: 36.629px;
  cy: 19.377px;
  r: 6.871px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.fy7gm4ujj {
  cx: 32.394px;
  cy: 27.987px;
  r: 9.494px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.t4b659o-m {
  cx: 24px;
  cy: 24px;
  r: 15.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.v1xj1aczo {
  cx: 14.965px;
  cy: 26.55px;
  r: 10.465px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="t4b659o-m"/><circle class="v1xj1aczo"/><circle class="fy7gm4ujj"/><circle class="aqljibbxb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:cloud-mimedia"} {...others} />);
}

export default Component;
