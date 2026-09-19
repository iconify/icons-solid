import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.akm-_sbbe {
  cx: 24px;
  cy: 14.27px;
  r: 3.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.hx_t9us-o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.33 4.5H15.67a3.16 3.16 0 0 0-3.14 3.14v32.72a3.16 3.16 0 0 0 3.14 3.14h16.66a3.16 3.16 0 0 0 3.14-3.14V7.64a3.16 3.16 0 0 0-3.14-3.14M24 20.22a6 6 0 1 1 6-6a6 6 0 0 1-6 6");
}
</style><path class="hx_t9us-o"/><circle class="akm-_sbbe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:motomarket"} {...others} />);
}

export default Component;
