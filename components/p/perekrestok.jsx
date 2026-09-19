import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.wy5orcb4i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.606 16.79a7.193 7.193 0 0 0 0 14.385c2.355.258 3.725-.8 5.278-2.309l5.025-4.883l-5.026-4.883c-1.37-1.652-3.172-2.193-5.277-2.31m24.788 0a7.193 7.193 0 0 1 0 14.385c-2.355.258-3.725-.8-5.278-2.309l-5.025-4.883l5.026-4.883c1.37-1.652 3.172-2.193 5.277-2.31M16.79 36.395a7.193 7.193 0 0 0 14.385 0c.258-2.355-.8-3.725-2.309-5.278l-4.883-5.025l-4.883 5.026c-1.652 1.37-2.193 3.172-2.31 5.277m0-24.788a7.193 7.193 0 0 1 14.385 0c.258 2.355-.8 3.725-2.309 5.278l-4.883 5.025l-4.883-5.026c-1.652-1.37-2.193-3.172-2.31-5.277");
}
</style><path class="wy5orcb4i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:perekrestok"} {...others} />);
}

export default Component;
