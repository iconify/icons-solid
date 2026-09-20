import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.mt3vtqm1b {
  fill: currentColor;
  d: path("M232 112v32a8 8 0 0 1-8 8H56v16h88a8 8 0 0 1 8 8v24a8 8 0 0 1-8 8H56v8a8 8 0 0 1-16 0V40a8 8 0 0 1 16 0v8h120a8 8 0 0 1 8 8v24a8 8 0 0 1-8 8H56v16h168a8 8 0 0 1 8 8");
}
</style><path class="mt3vtqm1b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:chart-bar-horizontal-fill"} {...others} />);
}

export default Component;
