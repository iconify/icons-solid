import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vsyaiubli {
  fill: currentColor;
  d: path("m14.764 10l5.789-2.894a1 1 0 1 1 .894 1.788L16 11.618V12a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5v-1a1 1 0 0 1 1-1Z");
}
</style><path class="vsyaiubli"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:frying-pan-fill-round"} {...others} />);
}

export default Component;
