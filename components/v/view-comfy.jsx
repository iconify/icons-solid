import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ysjq_vkpb {
  fill: currentColor;
  d: path("M3 11.5V5h18v6.5zM9.385 19v-6.5H21V19zM3 19v-6.5h5.385V19z");
}
</style><path class="ysjq_vkpb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:view-comfy"} {...others} />);
}

export default Component;
