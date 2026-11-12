import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ile8nubpz {
  fill: currentColor;
  d: path("M7 4v3h3V4a2 2 0 1 1 4 0v3h3V4a2 2 0 1 1 4 0v11a1 1 0 0 1 0 2v3a2 2 0 1 1-4 0v-3h-3v3a2 2 0 1 1-4 0v-3H7v3a2 2 0 1 1-4 0V9a1 1 0 0 1 0-2V4a2 2 0 1 1 4 0m0 11h3V9H7Zm7 0h3V9h-3Z");
}
</style><path class="ile8nubpz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:radiator-fill-round"} {...others} />);
}

export default Component;
