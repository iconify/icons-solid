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

.fvabp-b5g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M37.026 6.896c2.485 5.569 4.249 11.614 4.249 11.614");
}

.o9j935ipi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6.523 11.476c6.07 4 8.754 6.039 10.565 10.102m26.195-7.094c-4.996 8.992-8.281 22.26-9.133 28.473");
}

.t7avcoy3h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.287 2.823c-3.647 13.312-4.241 23.245-2.015 41.902");
}
</style><circle class="cpk0fnbgt"/><path class="t7avcoy3h"/><path class="o9j935ipi"/><path class="fvabp-b5g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:parfumo"} {...others} />);
}

export default Component;
