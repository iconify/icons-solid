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

.so5qj7yrb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22.371 19.319v9.362m2.768-.01v-9.352l4.68 9.362l4.681-9.347v9.347m-14.798-3.14v.039a3.101 3.101 0 0 1-6.202 0v-3.16a3.101 3.101 0 0 1 6.202 0v.038");
}
</style><circle class="cpk0fnbgt"/><path class="so5qj7yrb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:cim"} {...others} />);
}

export default Component;
