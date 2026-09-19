import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.i-ajp2bgy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.646 24.251L22.63 34.27l-8.898-8.898L23.75 15.354m8.898 8.897l3.235 3.235H42.5V5.5H20.516v6.619l3.234 3.234m8.235 9.562V42.5H5.5V16.017h17.588");
}
</style><path class="i-ajp2bgy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:easy-open-link"} {...others} />);
}

export default Component;
