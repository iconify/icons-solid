import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.mnm6o6b7s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.92 33.94a6.86 6.86 0 0 0 3.65.86h3.2a5.41 5.41 0 0 0 5.39-5.4a5.4 5.4 0 0 0-5.39-5.4h-3.54a5.4 5.4 0 0 1-5.39-5.4a5.4 5.4 0 0 1 5.39-5.4h3.2a7.36 7.36 0 0 1 3.23.63M24 13.2v-2.7m0 27v-2.7M8.8 39.2L39.2 8.8");
}
</style><circle class="cpk0fnbgt"/><path class="mnm6o6b7s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:moneybuster"} {...others} />);
}

export default Component;
