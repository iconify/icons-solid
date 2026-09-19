import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ynan52bvw {
  fill: currentColor;
  d: path("M21 7h-6V5h6zm-2 3.9A5.002 5.002 0 0 1 14 3H7c-1.1 0-2 .9-2 2v16l7-3l7 3z");
}
</style><path class="ynan52bvw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-bookmark-remove"} {...others} />);
}

export default Component;
