import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.hkmfaqohc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.015 33.445v8.2L42.5 26.742V6.355L24 15.657L5.5 6.355v20.387l31.485 14.903v-8.2m-12.92-2.947V19.373");
}
</style><path class="hkmfaqohc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:quranic"} {...others} />);
}

export default Component;
