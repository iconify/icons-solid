import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.elmf8_b8e {
  cx: 16.2px;
  cy: 8.4px;
  r: 3.9px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.i58ae2blo {
  cx: 31.8px;
  cy: 8.4px;
  r: 3.9px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.i5rdw2b1f {
  cx: 31.8px;
  cy: 24px;
  r: 3.9px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.t2d5dwbrg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.2 20.1za3.9 3.9 0 0 1 3.9 3.9v15.6a3.9 3.9 0 0 1-7.8 0V24a3.9 3.9 0 0 1 3.9-3.9");
}
</style><path class="t2d5dwbrg"/><circle class="elmf8_b8e"/><circle class="i58ae2blo"/><circle class="i5rdw2b1f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:flash-morse-code"} {...others} />);
}

export default Component;
