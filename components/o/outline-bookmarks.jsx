import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vl7s5--0b {
  fill: currentColor;
  d: path("M15 7v12.97l-4.21-1.81l-.79-.34l-.79.34L5 19.97V7zm4-6H8.99C7.89 1 7 1.9 7 3h10c1.1 0 2 .9 2 2v13l2 1V3c0-1.1-.9-2-2-2m-4 4H5c-1.1 0-2 .9-2 2v16l7-3l7 3V7c0-1.1-.9-2-2-2");
}
</style><path class="vl7s5--0b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-bookmarks"} {...others} />);
}

export default Component;
