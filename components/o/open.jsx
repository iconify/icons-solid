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

.ljdhs6i7h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36 41.84A33.32 33.32 0 0 1 13 5.55");
}

.w5n8wkeaa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35.1 5.79a35 35 0 0 1 .27 3.84A33.21 33.21 0 0 1 12 41.82");
}

.y73kj-m2q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M2.5 23.65a33.21 33.21 0 0 1 43 0");
}
</style><circle class="cpk0fnbgt"/><path class="ljdhs6i7h"/><path class="y73kj-m2q"/><path class="w5n8wkeaa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:open"} {...others} />);
}

export default Component;
