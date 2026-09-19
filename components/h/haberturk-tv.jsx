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

.ofeulqh4y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.75 27.466h5.2m-2.6 8v-8");
}

.u3513hujp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.75 11.448v8m5.3-8v8m-5.3-4.1h5.3m-5.3 7.891h14.74m-.24 4.227l-2.6 8l-2.6-8");
}

.vwyle5r8n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.05 11.448h5.2m-2.6 8v-8");
}

.y6g0rvbfs {
  cx: 15.05px;
  cy: 35.166px;
  r: 0.75px;
  fill: currentColor;
}
</style><path class="ofeulqh4y"/><circle class="y6g0rvbfs"/><path class="u3513hujp"/><circle class="cpk0fnbgt"/><path class="vwyle5r8n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:haberturk-tv"} {...others} />);
}

export default Component;
