import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.q4v-ekbdh {
  fill: currentColor;
  d: path("M8 16a4 4 0 0 0 8 0V4a1 1 0 0 1 2 0v12a6 6 0 1 1-12 0V4a1 1 0 0 1 2 0Z");
}
</style><path class="q4v-ekbdh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:letter-u-fill-round"} {...others} />);
}

export default Component;
