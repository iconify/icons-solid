import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.gzx3r0b3p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.25 15.746V30.5c0 3.324-2.676 6-6 6H14c-3.324 0-6-2.676-6-6v-19c0-3.324 2.676-6 6-6h9.25c3.324 0 6 2.676 6 6");
}

.soki7sb7q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.75 36.5v-19c0-3.324 2.926-6 6.25-6h9c3.324 0 6 2.676 6 6v19c0 3.324-2.676 6-6 6h-9.25a5.98 5.98 0 0 1-4.246-1.753");
}
</style><path class="gzx3r0b3p"/><path class="soki7sb7q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:moto-device-manager"} {...others} />);
}

export default Component;
