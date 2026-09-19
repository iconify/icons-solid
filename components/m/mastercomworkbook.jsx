import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.rqnbjpw5t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.5 20.48L24 9.54L4.5 20.48L24 31.42z");
}

.tytr0p6tk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36.26 24.54v7.04L24 38.46l-12.26-6.88v-7.04M43.5 35.02V20.48");
}
</style><path class="rqnbjpw5t"/><path class="tytr0p6tk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:mastercomworkbook"} {...others} />);
}

export default Component;
