import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dtr_d0o8k {
  fill: currentColor;
  d: path("M7 17v5h10v-5z");
}

.vxlz0wo_h {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-3, 0.3);
  d: path("M17 4h-3V2h-4v2H7v13h10z");
}
</style><path class="dtr_d0o8k"/><path class="vxlz0wo_h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-battery-20"} {...others} />);
}

export default Component;
