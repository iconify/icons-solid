import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.jx4hcl6sj {
  width: 30.5px;
  height: 19.5px;
  x: 13px;
  y: 17.25px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2px;
  ry: 2px;
}

.vm6ya0rbd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.875 17.25v-6m-6.125 6v-6M13 30.75H6.5c-1.108 0-2-.892-2-2v-15.5c0-1.108.892-2 2-2H33c1.108 0 2 .892 2 2v4");
}

.y_n1ecb7q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M37.375 36.75v-19.5m-6.125 19.5v-19.5");
}
</style><path class="vm6ya0rbd"/><rect class="jx4hcl6sj"/><path class="y_n1ecb7q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:doutor-value-card"} {...others} />);
}

export default Component;
