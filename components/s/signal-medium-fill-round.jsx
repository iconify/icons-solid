import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.y8yi0vlry {
  fill: currentColor;
  d: path("M13 20V8a1 1 0 0 1 2 0v12a1 1 0 0 1-2 0m-4 0v-8a1 1 0 0 1 2 0v8a1 1 0 0 1-2 0m-4 0v-4a1 1 0 0 1 2 0v4a1 1 0 0 1-2 0m13-1h.01a1 1 0 0 1 0 2H18a1 1 0 0 1 0-2");
}
</style><path class="y8yi0vlry"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:signal-medium-fill-round"} {...others} />);
}

export default Component;
