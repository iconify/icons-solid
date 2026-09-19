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

.k_9z_ta0x {
  cx: 30.302px;
  cy: 24px;
  r: 7.505px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.sg0cj3bjg {
  fill: none;
  stroke: currentColor;
  d: path("M15.419 18.774h9.215");
}

.x-dhzkbmm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.419 18.774a5.226 5.226 0 1 0 0 10.452H24.6");
}
</style><circle class="k_9z_ta0x"/><path class="x-dhzkbmm"/><path class="sg0cj3bjg"/><circle class="cpk0fnbgt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:turn-me-on"} {...others} />);
}

export default Component;
