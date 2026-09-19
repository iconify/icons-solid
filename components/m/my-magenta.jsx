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

.n4jx23-cx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.5 28.696v-9.402l4.706 9.412l4.707-9.398v9.398m2.174-3.882c0-1.3 1.054-2.354 2.353-2.354h0c1.3 0 2.353 1.054 2.353 2.354v3.882m-4.706-6.236v6.236m4.707-3.882c0-1.3 1.053-2.354 2.353-2.354h0c1.3 0 2.353 1.054 2.353 2.354v3.882");
}
</style><rect class="j3s9ivbxi"/><path class="n4jx23-cx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:my-magenta"} {...others} />);
}

export default Component;
