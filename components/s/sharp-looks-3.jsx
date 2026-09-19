import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nw_uqfb4x {
  fill: currentColor;
  d: path("M21 3H3.01v18H21zm-5.99 14H9v-2h4v-2h-2v-2h2V9H9V7h6.01z");
}
</style><path class="nw_uqfb4x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-looks-3"} {...others} />);
}

export default Component;
