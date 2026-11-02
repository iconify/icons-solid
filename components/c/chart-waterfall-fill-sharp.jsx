import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i-93nccvc {
  fill: currentColor;
  d: path("M4 4v15h17a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0m8 2v3a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0M8 9v7a1 1 0 0 1-2 0V9a1 1 0 0 1 2 0m8 0v3a1 1 0 0 1-2 0V9a1 1 0 0 1 2 0m4 3v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 2 0");
}
</style><path class="i-93nccvc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:chart-waterfall-fill-sharp"} {...others} />);
}

export default Component;
