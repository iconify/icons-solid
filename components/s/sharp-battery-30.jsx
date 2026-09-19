import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p8ivdvbnd {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-3, 0.3);
  d: path("M17 4h-3V2h-4v2H7v11h10z");
}

.zmp46gb-r {
  fill: currentColor;
  d: path("M7 15v7h10v-7z");
}
</style><path class="p8ivdvbnd"/><path class="zmp46gb-r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-battery-30"} {...others} />);
}

export default Component;
