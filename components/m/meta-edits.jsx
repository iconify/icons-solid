import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.d8aanxymw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.07 42.5H9.5c-2.216 0-4-1.784-4-4v-29c0-2.216 1.784-4 4-4h14.57m10.86 0h3.57c2.216 0 4 1.784 4 4v29c0 2.216-1.784 4-4 4h-3.57m-5.43-39v41");
}
</style><path class="d8aanxymw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:meta-edits"} {...others} />);
}

export default Component;
