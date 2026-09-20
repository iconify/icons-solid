import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.pyhif0hsv {
  fill: currentColor;
  d: path("M18 9.5a.5.5 0 0 1-.5.5H16v2a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-2H9v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4H2.5a.5.5 0 0 1 0-1H4V5a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v4h2V7a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v2h1.5a.5.5 0 0 1 .5.5");
}
</style><path class="pyhif0hsv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:align-center-horizontal-20-filled"} {...others} />);
}

export default Component;
