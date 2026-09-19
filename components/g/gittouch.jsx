import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.b04-_m88o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.5 8.62v5.7l-14.48 8.36v16.75l-4.96 2.86V19.85z");
}

.oiro-aljr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m43.5 8.62l-4.96-2.86l-14.51 8.38l-14.6-8.43L4.5 8.55l19.56 11.3z");
}

.pghm4nm0z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 8.55v5.7l14.6 8.43v16.75l4.96 2.86V19.85z");
}
</style><path class="oiro-aljr"/><path class="pghm4nm0z"/><path class="b04-_m88o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:gittouch"} {...others} />);
}

export default Component;
