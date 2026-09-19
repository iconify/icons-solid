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

.pozoebbpw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M37.443 25.944c-4.1-11.683-16.221-9.095-21.518-3.798C10.81 27.261 10.147 41.243 24 45.5");
}

.s4-o8qbtt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.313 34.635C1.201 24 9.16 13.812 18.123 12.265c18.578-3.204 19.318 13.679 19.318 13.679");
}
</style><circle class="cpk0fnbgt"/><path class="s4-o8qbtt"/><path class="pozoebbpw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:tides"} {...others} />);
}

export default Component;
