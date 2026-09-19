import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.imlt4xb5s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.308 45.5H2.5V24.692A22.257 22.257 0 0 1 24.692 2.5h1.384A19.48 19.48 0 0 1 45.5 21.924v1.384A22.257 22.257 0 0 1 23.308 45.5");
}

.v887jgb5t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.61 16v10.388a5.627 5.627 0 0 1-5.61 5.61h0a5.627 5.627 0 0 1-5.61-5.61V16m11.22 8.283V32");
}
</style><path class="imlt4xb5s"/><path class="v887jgb5t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:myufone"} {...others} />);
}

export default Component;
