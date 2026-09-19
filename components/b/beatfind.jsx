import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.h9co-vbtt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m22.188 26.192l-4.225 16.901a.315.315 0 0 0 .548.277l16.967-20.56a.63.63 0 0 0-.486-1.03H21.938c-3.51 0-4.74-1.755-3.437-4.061");
}

.nah16p-ef {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m25.648 21.78l4.225-16.901a.315.315 0 0 0-.548-.277L12.36 25.162a.63.63 0 0 0 .485 1.03H25.9c3.51 0 4.74 1.755 3.436 4.061");
}
</style><path class="h9co-vbtt"/><path class="nah16p-ef"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:beatfind"} {...others} />);
}

export default Component;
