import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.rkr-06b9t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12 11.974h9v9h-9zm15.026.053h9v9h-9zM11.974 36.026v-9h9v9zm15.052 0v-9h9v9z");
}

.ve07db6fn {
  width: 38px;
  height: 38px;
  x: 5px;
  y: 5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}
</style><rect class="ve07db6fn"/><path class="rkr-06b9t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:dissembler"} {...others} />);
}

export default Component;
