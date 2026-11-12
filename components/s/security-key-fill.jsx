import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.y_5eusy1d {
  fill: currentColor;
  d: path("M2 9a3 3 0 0 1 3-3h8c1.27 0 2.405.803 2.829 2H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4.171A3 3 0 0 1 13 18H5a3 3 0 0 1-3-3Zm8 4v-2a1 1 0 0 0-2 0v2a1 1 0 0 0 2 0m6 1h4v-1h-1a1 1 0 0 1 0-2h1v-1h-4Z");
}
</style><path class="y_5eusy1d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:security-key-fill"} {...others} />);
}

export default Component;
