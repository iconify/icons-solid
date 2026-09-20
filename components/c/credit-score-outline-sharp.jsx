import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wqvk_g9kf {
  fill: currentColor;
  d: path("M4 8h16V6H4zM2 20V4h20v8H4v6h4.1v2zm12.95 2l-4.25-4.25l1.4-1.4l2.85 2.8l5.65-5.65l1.4 1.45zM4 18v-4.5v2.825V6z");
}
</style><path class="wqvk_g9kf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:credit-score-outline-sharp"} {...others} />);
}

export default Component;
