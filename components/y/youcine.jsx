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

.vevis8b3e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m31.263 24.196l-8.09-6.772a1.233 1.233 0 0 0-2.006.73l-1.828 10.37a1.233 1.233 0 0 0 1.634 1.373l9.919-3.597a1.233 1.233 0 0 0 .37-2.104");
}
</style><path class="vevis8b3e"/><circle class="cpk0fnbgt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:youcine"} {...others} />);
}

export default Component;
