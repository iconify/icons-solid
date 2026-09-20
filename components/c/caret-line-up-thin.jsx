import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.mvyi0ibrj {
  fill: currentColor;
  d: path("M210.83 194.83a4 4 0 0 1-5.66 0L128 117.66l-77.17 77.17a4 4 0 0 1-5.66-5.66l80-80a4 4 0 0 1 5.66 0l80 80a4 4 0 0 1 0 5.66M48 76h160a4 4 0 0 0 0-8H48a4 4 0 0 0 0 8");
}
</style><path class="mvyi0ibrj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:caret-line-up-thin"} {...others} />);
}

export default Component;
