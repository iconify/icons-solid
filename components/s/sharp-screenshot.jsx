import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.seoivjzwl {
  fill: currentColor;
  d: path("M5 1v22h14V1zm12 17H7V6h10zM9.5 8.5H12V7H8v4h1.5zM12 17h4v-4h-1.5v2.5H12z");
}
</style><path class="seoivjzwl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-screenshot"} {...others} />);
}

export default Component;
