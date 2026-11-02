import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.x1rmxw4ye {
  fill: currentColor;
  d: path("M11 17v1a4 4 0 0 1-8 0v-5c0-1.317.335-2.748 1.293-3.707l4-4a5.243 5.243 0 0 1 7.414 0l4 4C20.665 10.252 21 11.683 21 13v5a4 4 0 0 1-8 0v-1a1 1 0 0 0-2 0");
}
</style><path class="x1rmxw4ye"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:house-alt-1-fill-round"} {...others} />);
}

export default Component;
