import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yxyq2gb9i {
  fill: currentColor;
  d: path("M13 5.733V8h6a1 1 0 0 1 1 1v5h1a1 1 0 0 1 0 2h-1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-5H3a1 1 0 0 1 0-2h1V9a1 1 0 0 1 1-1h6V5.733a2.001 2.001 0 1 1 2 0M10 15v-2a1 1 0 0 0-2 0v2a1 1 0 0 0 2 0m6 0v-2a1 1 0 0 0-2 0v2a1 1 0 0 0 2 0");
}
</style><path class="yxyq2gb9i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:robot-fill-sharp"} {...others} />);
}

export default Component;
