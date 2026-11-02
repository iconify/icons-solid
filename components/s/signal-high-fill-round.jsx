import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yugmclm0w {
  fill: currentColor;
  d: path("M19 4v16a1 1 0 0 1-2 0V4a1 1 0 0 1 2 0m-6 4a1 1 0 0 1 2 0v12a1 1 0 0 1-2 0Zm-4 4a1 1 0 0 1 2 0v8a1 1 0 0 1-2 0Zm-4 4a1 1 0 0 1 2 0v4a1 1 0 0 1-2 0Z");
}
</style><path class="yugmclm0w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:signal-high-fill-round"} {...others} />);
}

export default Component;
