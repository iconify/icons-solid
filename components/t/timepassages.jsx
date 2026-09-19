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

.drin70bjp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.808 7a17 17 0 0 0-4.603.648a16.988 16.988 0 0 1-.013 32.7a16.96 16.96 0 0 0 21.616-16.346V24A17 17 0 0 0 23.81 7Z");
}
</style><circle class="cpk0fnbgt"/><path class="drin70bjp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:timepassages"} {...others} />);
}

export default Component;
