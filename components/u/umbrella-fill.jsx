import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yd3j_obfm {
  fill: currentColor;
  d: path("M21 13h-8v6a1 1 0 0 0 1.387.922A.99.99 0 0 0 15 19a1 1 0 0 1 2 0a3 3 0 1 1-6 0v-6H3a1 1 0 0 1-1-1C2 6.477 6.477 2 12 2s10 4.477 10 10a1 1 0 0 1-1 1");
}
</style><path class="yd3j_obfm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:umbrella-fill"} {...others} />);
}

export default Component;
