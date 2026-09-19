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

.ur9gy0gct {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.601 33.101h10m-10-3h10m-9.3-18.002l8.6 8.6m0-8.6l-8.6 8.6m-14.902-4.3h8m-8 15.202h8m-4-4v8");
}
</style><circle class="cpk0fnbgt"/><path class="ur9gy0gct"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:fossify-calculator-alt"} {...others} />);
}

export default Component;
