import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.dws-4ubsa {
  d: path("m5.5 20.975l11.068.11m-5.326.392s1.966 15.276 11.294 15.782s13.402-12.301 13.402-12.301");
}

.emejqxv9s {
  cx: 39.06px;
  cy: 14.166px;
  r: 3.44px;
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="dws-4ubsa"/><circle class="emejqxv9s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:tui-poland"} {...others} />);
}

export default Component;
