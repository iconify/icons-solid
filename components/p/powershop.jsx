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

.zmwlc1o4x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.22 29.83c2.14 3.53 6.16 5.91 10.78 5.91s8.64-2.38 10.78-5.91m-23.56-8.61l8.77-8.17m8.02 0l8.77 8.17");
}
</style><circle class="cpk0fnbgt"/><path class="zmwlc1o4x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:powershop"} {...others} />);
}

export default Component;
