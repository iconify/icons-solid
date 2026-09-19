import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.hj09gibdk {
  cx: 23.886px;
  cy: 23.751px;
  rx: 15.419px;
  ry: 15.47px;
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.yd1u9sbuw {
  d: path("m5.69 34.435l36.62-.084L23.966 2.6z");
}
</style><g class="y9tr6bcfx"><path class="yd1u9sbuw"/><ellipse class="hj09gibdk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:awoken"} {...others} />);
}

export default Component;
