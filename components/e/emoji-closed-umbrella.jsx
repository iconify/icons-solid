import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.d068whgwt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.066 24.14c1.338-.33 2.428-2.113 2.44-3.154c1.132-.193 2.484-1.15 2.83-2.48c1.225.463 2.867-.033 3.524-1.177c.973.697 2.936.654 4.03-.569l6.478 25.74z");
}

.pm1nlrbra {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m22.334 18.508l-6.996-11.97c-1.357-2.32-4.746-.346-3.392 1.97");
}
</style><path class="d068whgwt"/><path class="pm1nlrbra"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:emoji-closed-umbrella"} {...others} />);
}

export default Component;
