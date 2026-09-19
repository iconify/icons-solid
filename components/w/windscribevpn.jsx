import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.oxiwoqy_q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.82 14.48V33.7h3.07a3.43 3.43 0 0 0 2.2-1h0L24 27.34l5.9 5.38h0a3.52 3.52 0 0 0 2.21 1h3.07V14.48");
}

.rkelngbtw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 44.5l-14.5-6l-6-14.5l6-14.5l14.5-6l14.5 6l6 14.5l-6 14.5Z");
}
</style><path class="rkelngbtw"/><path class="oxiwoqy_q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:windscribevpn"} {...others} />);
}

export default Component;
