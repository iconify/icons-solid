import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tfjgrpbhf {
  fill: currentColor;
  d: path("M4.393 5.053a5.001 5.001 0 1 1 9.213 3.896a5.001 5.001 0 0 1-9.213-3.896M21 3a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2Zm0 4a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2Zm0 4a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2Zm-6 11H3a1 1 0 0 1-1-1a6.9 6.9 0 0 1 .551-2.725A6.9 6.9 0 0 1 4.05 16.05A6.97 6.97 0 0 1 9 14c1.862 0 3.636.731 4.95 2.05a6.9 6.9 0 0 1 1.499 2.225c.366.862.554 1.789.551 2.725a1 1 0 0 1-1 1");
}
</style><path class="tfjgrpbhf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:user-list-fill-sharp"} {...others} />);
}

export default Component;
