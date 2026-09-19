import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.gdqbly48t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.645 31.085v-3.094h7.021l4.082-6.645H28.645V10.243L22 14.324v9.027");
}

.jp0xl_big {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m31.551 34.467l-14.598-16.99H8.122l7.298 8.495l-7.298 8.495h8.831l2.883-3.355l2.883 3.355z");
}
</style><path class="jp0xl_big"/><path class="gdqbly48t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:myxl"} {...others} />);
}

export default Component;
