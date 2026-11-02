import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pj04a46rp {
  fill: currentColor;
  d: path("M5 3a1 1 0 0 1 2 0v1h2V3a1 1 0 0 1 2 0v1h2V3a1 1 0 0 1 2 0v1h2V3a1 1 0 0 1 2 0v7h2a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-5v-4a4 4 0 0 0-8 0v4H3a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h2Z");
}
</style><path class="pj04a46rp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:castle-fill-sharp"} {...others} />);
}

export default Component;
