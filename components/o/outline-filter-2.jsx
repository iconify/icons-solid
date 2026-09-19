import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zottu70lv {
  fill: currentColor;
  d: path("M3 5H1v16c0 1.1.9 2 2 2h16v-2H3zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2m0 16H7V3h14zm-4-4h-4v-2h2a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4v2h4v2h-2a2 2 0 0 0-2 2v4h6z");
}
</style><path class="zottu70lv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-filter-2"} {...others} />);
}

export default Component;
