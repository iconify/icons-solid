import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mm_0jcbxu {
  fill: currentColor;
  d: path("M21 8H3a1 1 0 0 1-.406-1.914l9-4a1 1 0 0 1 .812 0l9 4A1 1 0 0 1 21 8M7 17a1 1 0 0 1-2 0v-6a1 1 0 0 1 2 0Zm4 0a1 1 0 0 1-2 0v-6a1 1 0 0 1 2 0Zm4 0a1 1 0 0 1-2 0v-6a1 1 0 0 1 2 0Zm4 0a1 1 0 0 1-2 0v-6a1 1 0 0 1 2 0ZM3 20h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2");
}
</style><path class="mm_0jcbxu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:bank-fill-round"} {...others} />);
}

export default Component;
