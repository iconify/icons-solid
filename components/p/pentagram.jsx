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

.m5k8xi6tb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.812 30.691h-9.624l-2.974-9.153L24 15.882l7.786 5.656z");
}

.zm2js9vrn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 45.5l-4.812-14.809H3.617l12.597-9.153l-4.812-14.809L24 15.882l12.597-9.153l-4.811 14.809l12.597 9.153H28.812z");
}
</style><circle class="cpk0fnbgt"/><path class="zm2js9vrn"/><path class="m5k8xi6tb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:pentagram"} {...others} />);
}

export default Component;
