import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fpsctej-e {
  fill: currentColor;
  d: path("M11 7v6a4 4 0 0 1-8 0V7a4 4 0 0 1 8 0m10 4v2a4 4 0 0 1-8 0v-2a4 4 0 0 1 8 0m0 8a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2Z");
}
</style><path class="fpsctej-e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:align-bottom-fill-round"} {...others} />);
}

export default Component;
