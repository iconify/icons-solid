import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zl88tvb9c {
  fill: currentColor;
  d: path("M7 3v11a3 3 0 0 0 3 3h11a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-2h-7a5 5 0 0 1-5-5V7H3a1 1 0 0 1 0-2h2V3a1 1 0 0 1 2 0m3 2h4a5 5 0 0 1 5 5v4a1 1 0 0 1-2 0v-4a3 3 0 0 0-3-3h-4a1 1 0 0 1 0-2");
}
</style><path class="zl88tvb9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:crop-fill-round"} {...others} />);
}

export default Component;
