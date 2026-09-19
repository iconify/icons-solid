import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.f799qv57c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.529 7.096a3 3 0 0 0-3.674 2.122L17.349 37.23a3 3 0 1 0 5.796 1.553L30.65 10.77a3 3 0 0 0-2.121-3.675m-2.401 5.099l-6.183 23.075");
}
</style><circle class="cpk0fnbgt"/><path class="f799qv57c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:serializd"} {...others} />);
}

export default Component;
