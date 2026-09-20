import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.gb5qj3bqp {
  cx: 19.01px;
  cy: 28.99px;
  r: 2.482px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.i0v5dbbcf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.09 10.55A16.24 16.24 0 0 0 7.76 24m7.16 13.46A16.23 16.23 0 0 0 40.23 24M9.04 24h2.82l-3.88 5.92L4.11 24zm30.14 0h-2.82l3.87-5.92L44.11 24z");
}

.ztu9gcbgl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.528 28.99A13.52 13.52 0 0 0 19.01 15.472M26.8 28.99a7.79 7.79 0 0 0-7.79-7.79");
}
</style><path class="i0v5dbbcf"/><path class="ztu9gcbgl"/><circle class="gb5qj3bqp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:sparss-decsync"} {...others} />);
}

export default Component;
