import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pf9nalbbr {
  fill: currentColor;
  d: path("M5 3a1 1 0 0 1 2 0v1h2V3a1 1 0 0 1 2 0v1h2V3a1 1 0 0 1 2 0v1h2V3a1 1 0 0 1 2 0v7a3 3 0 0 1 3 3v4a5 5 0 0 1-1.464 3.536A5 5 0 0 1 17 22h-1v-4a4 4 0 0 0-8 0v4H7a5 5 0 0 1-5-5v-4a3 3 0 0 1 3-3Z");
}
</style><path class="pf9nalbbr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:castle-fill-round"} {...others} />);
}

export default Component;
