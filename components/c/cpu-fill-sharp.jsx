import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gtnvbc2ld {
  fill: currentColor;
  d: path("M11 3v2h2V3a1 1 0 0 1 2 0v2h3a1 1 0 0 1 1 1v3h2a1 1 0 0 1 0 2h-2v2h2a1 1 0 0 1 0 2h-2v3a1 1 0 0 1-1 1h-3v2a1 1 0 0 1-2 0v-2h-2v2a1 1 0 0 1-2 0v-2H6a1 1 0 0 1-1-1v-3H3a1 1 0 0 1 0-2h2v-2H3a1 1 0 0 1 0-2h2V6a1 1 0 0 1 1-1h3V3a1 1 0 0 1 2 0m-2 7v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1");
}
</style><path class="gtnvbc2ld"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:cpu-fill-sharp"} {...others} />);
}

export default Component;
