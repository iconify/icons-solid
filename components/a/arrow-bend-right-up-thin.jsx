import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.vbut-3-zr {
  fill: currentColor;
  d: path("M202.83 82.83a4 4 0 0 1-5.66 0L156 41.66V128A100.11 100.11 0 0 1 56 228a4 4 0 0 1 0-8a92.1 92.1 0 0 0 92-92V41.66l-41.17 41.17a4 4 0 0 1-5.66-5.66l48-48a4 4 0 0 1 5.66 0l48 48a4 4 0 0 1 0 5.66");
}
</style><path class="vbut-3-zr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrow-bend-right-up-thin"} {...others} />);
}

export default Component;
