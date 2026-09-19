import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.f9k1ombqm {
  cx: 25.132px;
  cy: 24.073px;
  r: 1.894px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.xdw89jbjg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m10.509 23.813l-5.56-3.21a.3.3 0 0 0-.45.26v6.42a.3.3 0 0 0 .45.26l5.56-3.21a.3.3 0 0 0 0-.52m32.706-.26L16.668 8.226a.6.6 0 0 0-.9.52V39.4c0 .462.5.75.9.52l26.547-15.328a.6.6 0 0 0 0-1.04");
}
</style><circle class="f9k1ombqm"/><path class="xdw89jbjg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:iclicker"} {...others} />);
}

export default Component;
