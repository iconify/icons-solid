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

.x-9u8abrj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M37.141 32.191L27.45 22.5h11.974a15.4 15.4 0 0 0-2.47-7H22.5V8.576a15.4 15.4 0 0 0-7 2.47V15.5h-4.454a15.4 15.4 0 0 0-2.47 7H15.5v14.454a15.4 15.4 0 0 0 7 2.47V27.45l9.692 9.691a15.55 15.55 0 0 0 4.95-4.95");
}
</style><circle class="cpk0fnbgt"/><path class="x-9u8abrj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:myalpha-mobile"} {...others} />);
}

export default Component;
