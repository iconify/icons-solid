import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.qgb62ubid {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5 14.764v18.472m38 0l-8.944-18.472l-6.425 13.27a9.236 9.236 0 1 1-4.015-12.211m17.486 13.494h-8.52");
}
</style><path class="qgb62ubid"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:ica"} {...others} />);
}

export default Component;
