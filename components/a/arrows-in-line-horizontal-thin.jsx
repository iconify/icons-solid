import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.zoq3zubvl {
  fill: currentColor;
  d: path("M132 40v176a4 4 0 0 1-8 0V40a4 4 0 0 1 8 0M66.83 93.17a4 4 0 0 0-5.66 5.66L86.34 124H16a4 4 0 0 0 0 8h70.34l-25.17 25.17a4 4 0 0 0 5.66 5.66l32-32a4 4 0 0 0 0-5.66ZM240 124h-70.34l25.17-25.17a4 4 0 1 0-5.66-5.66l-32 32a4 4 0 0 0 0 5.66l32 32a4 4 0 0 0 5.66-5.66L169.66 132H240a4 4 0 0 0 0-8");
}
</style><path class="zoq3zubvl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrows-in-line-horizontal-thin"} {...others} />);
}

export default Component;
