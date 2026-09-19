import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ms4_5pbll {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.074 10.426L24 3.5l6.926 6.926m6.648 6.648L44.5 24l-6.926 6.926m-6.648 6.648L24 44.5l-6.926-6.926m-6.648-6.648L3.5 24l6.926-6.926");
}

.r4-sq68mq {
  cx: 24px;
  cy: 24px;
  r: 6.649px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="r4-sq68mq"/><path class="ms4_5pbll"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:appvaultx"} {...others} />);
}

export default Component;
