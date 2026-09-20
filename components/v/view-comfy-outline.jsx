import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vw_mnk_0a {
  fill: currentColor;
  d: path("M3 19V5h18v14zm17-7.5V6H4v5.5zM9.385 18H20v-5.5H9.385zM4 18h4.385v-5.5H4z");
}
</style><path class="vw_mnk_0a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:view-comfy-outline"} {...others} />);
}

export default Component;
