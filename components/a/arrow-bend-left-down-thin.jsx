import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.l2u6dtb5z {
  fill: currentColor;
  d: path("M204 32a4 4 0 0 1-4 4a92.1 92.1 0 0 0-92 92v86.34l41.17-41.17a4 4 0 0 1 5.66 5.66l-48 48a4 4 0 0 1-5.66 0l-48-48a4 4 0 0 1 5.66-5.66L100 214.34V128A100.11 100.11 0 0 1 200 28a4 4 0 0 1 4 4");
}
</style><path class="l2u6dtb5z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrow-bend-left-down-thin"} {...others} />);
}

export default Component;
