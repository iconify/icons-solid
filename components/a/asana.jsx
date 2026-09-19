import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.bq8gd4bzj {
  cx: 34.7px;
  cy: 33.42px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 7.8px;
  ry: 7.71px;
}

.e846qoojt {
  cx: 24px;
  cy: 14.58px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 7.8px;
  ry: 7.71px;
}

.kuxwdpzmt {
  cx: 13.3px;
  cy: 33.42px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 7.8px;
  ry: 7.71px;
}
</style><ellipse class="kuxwdpzmt"/><ellipse class="bq8gd4bzj"/><ellipse class="e846qoojt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:asana"} {...others} />);
}

export default Component;
