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

.j5hvcdbsg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 28.141v-7.648c0-2.56-2.012-4.635-4.494-4.635s-4.494 2.075-4.494 4.635v7.648M24 20.494c0-2.56 2.012-4.635 4.494-4.635s4.494 2.075 4.494 4.635v7.648m0 3.999H15.012");
}
</style><rect class="j3s9ivbxi"/><path class="j5hvcdbsg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:motorsport-com"} {...others} />);
}

export default Component;
