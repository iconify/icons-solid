import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":415};
const content = `<style>.iyqr0zlwm {
  d: path("M0 89.613h47.999v235.196H0zM104.025 0h47.999v179.196h-47.999z");
}

.nw7uzr-xr {
  fill: var(--svg-color--31d891, #31d891);
  d: path("M104.025 235.229h47.999v179.196h-47.999zM208.001 89.613H256v235.196h-47.999z");
}
</style><path class="iyqr0zlwm"/><path class="nw7uzr-xr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"logos:heap-icon"} {...others} />);
}

export default Component;
