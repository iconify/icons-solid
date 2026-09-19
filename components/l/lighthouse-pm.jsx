import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.b_r7lfn8m {
  width: 24px;
  height: 39px;
  x: 12px;
  y: 4.5px;
  fill: none;
  stroke: currentColor;
  rx: 2px;
  ry: 2px;
}

.vaq46_bqf {
  cx: 24px;
  cy: 10px;
  r: 2px;
  fill: none;
  stroke: currentColor;
}
</style><rect class="b_r7lfn8m"/><circle class="vaq46_bqf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:lighthouse-pm"} {...others} />);
}

export default Component;
