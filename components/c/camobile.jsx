import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.j3s9ivbxi {
  width: 37px;
  height: 37px;
  x: 5.5px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}

.o9xb5gslp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.493 26.256v.056a4.496 4.496 0 0 1-4.497 4.496h0a4.496 4.496 0 0 1-4.496-4.496V21.73a4.496 4.496 0 0 1 4.496-4.496h0a4.496 4.496 0 0 1 4.497 4.496v.056m8.421 4.213h-5.902m-1.593 4.855l4.54-13.708L33.5 30.854");
}
</style><rect class="j3s9ivbxi"/><path class="o9xb5gslp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:camobile"} {...others} />);
}

export default Component;
