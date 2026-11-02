import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zqpdxihwc {
  fill: currentColor;
  d: path("M10 7v4h4V7a3 3 0 1 1 6 0v.171A3 3 0 0 1 22 10v4c0 1.27-.803 2.405-2 2.829V17a3 3 0 1 1-6 0v-4h-4v4a3 3 0 1 1-6 0v-.171A3 3 0 0 1 2 14v-4c0-1.27.803-2.405 2-2.829V7a3 3 0 1 1 6 0");
}
</style><path class="zqpdxihwc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:dumbbell-fill-round"} {...others} />);
}

export default Component;
