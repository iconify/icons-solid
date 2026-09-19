import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.w5noq2x9u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.066 33.948h10.217l3.129 3.128h18.522m-20.03-20.188h10.083v3.601H19.904z");
}

.y0aaimb9v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.959 5.5h9.904m8.281 5.672H24.36L18.959 5.5H8.066v33.219l3.511 3.781h25.837l2.52-3.781V14.232zm2.79 3.06H8.066m31.868 9.363H8.066");
}
</style><path class="y0aaimb9v"/><path class="w5noq2x9u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:lexmark-print"} {...others} />);
}

export default Component;
