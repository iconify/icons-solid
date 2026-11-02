import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e1yrh_byj {
  fill: currentColor;
  d: path("M8 3v5H3V6a3 3 0 0 1 3-3Zm2 5V3h4v5Zm6-5h2a3 3 0 0 1 3 3v2h-5ZM3 10h5v4H3Zm11 0v4h-4v-4Zm7 4h-5v-4h5ZM3 16h5v5H6a3 3 0 0 1-3-3Zm7 5v-5h4v5Zm6 0v-5h5v2a3 3 0 0 1-3 3Z");
}
</style><path class="e1yrh_byj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:grid-alt-fill"} {...others} />);
}

export default Component;
