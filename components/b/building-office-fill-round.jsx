import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qk37-nbjd {
  fill: currentColor;
  d: path("M15 22v-3a3 3 0 1 0-6 0v3H4a1 1 0 0 1-1-1V9a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v12a1 1 0 0 1-1 1Zm-6-9V9a1 1 0 0 0-2 0v4a1 1 0 0 0 2 0m4 0V9a1 1 0 0 0-2 0v4a1 1 0 0 0 2 0m4-4a1 1 0 0 0-2 0v4a1 1 0 0 0 2 0Zm-6 13v-3a1 1 0 0 1 2 0v3Z");
}
</style><path class="qk37-nbjd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:building-office-fill-round"} {...others} />);
}

export default Component;
