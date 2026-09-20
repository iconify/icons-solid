import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.amemdtbsz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.12 29.971a7.29 7.29 0 0 1-6.332 3.672c-4.025 0-7.288-3.258-7.288-7.278v-4.73a7.28 7.28 0 0 1 7.287-7.278c4.026 0 7.289 3.258 7.289 7.278V24H5.5m22.424-7.849H42.5M27.924 24H42.5m-14.576 7.848H42.5");
}
</style><path class="amemdtbsz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:emergency"} {...others} />);
}

export default Component;
