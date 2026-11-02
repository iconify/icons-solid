import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.k2a-x9sbe {
  fill: currentColor;
  d: path("M8 3h8a5 5 0 0 1 5 5H3a5 5 0 0 1 5-5M3 14v-4h8v4Zm18-4v4h-8v-4Zm0 6a5 5 0 0 1-1.464 3.536A5 5 0 0 1 16 21H8a5 5 0 0 1-5-5Z");
}
</style><path class="k2a-x9sbe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:table-cells-split-fill-round"} {...others} />);
}

export default Component;
