import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ocv65522v {
  fill: currentColor;
  d: path("M5 6h14a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3m3 4a1 1 0 0 0-2 0v4a1 1 0 0 0 2 0Zm8 0v4a1 1 0 0 0 2 0v-4a1 1 0 0 0-2 0m-5 4h2a2 2 0 1 0 0-4h-2a2 2 0 1 0 0 4");
}
</style><path class="ocv65522v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:spirit-level-fill"} {...others} />);
}

export default Component;
