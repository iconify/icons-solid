import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.w3g2ivbey {
  fill: currentColor;
  d: path("M9 21a1 1 0 0 1-2 0V3a1 1 0 0 1 2 0Zm11 0V7a1 1 0 0 1 2 0v14a1 1 0 0 1-2 0M4 21a1 1 0 0 1-2 0V11a1 1 0 0 1 2 0Zm13 0a1 1 0 0 1-2 0v-6a1 1 0 0 1 2 0Z");
}
</style><path class="w3g2ivbey"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:chart-bar-grouped-bulk-round"} {...others} />);
}

export default Component;
