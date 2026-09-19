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

.px4bnm_ld {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.479 18.216v11.568m5.001-11.568v11.568M24 18.216v11.568m-7.52-5.806H24m12.521-1.93c0-2.116-1.683-3.832-3.76-3.832s-3.76 1.716-3.76 3.832v3.904c0 2.116 1.683 3.832 3.76 3.832s3.76-1.716 3.76-3.832h-3.76");
}
</style><rect class="j3s9ivbxi"/><path class="px4bnm_ld"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:ihg-hotel"} {...others} />);
}

export default Component;
