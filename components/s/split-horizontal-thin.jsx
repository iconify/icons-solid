import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.hsqy1jb9y {
  fill: currentColor;
  d: path("M108 48v160a4 4 0 0 1-8 0v-76H33.66l25.17 25.17a4 4 0 0 1-5.66 5.66l-32-32a4 4 0 0 1 0-5.66l32-32a4 4 0 0 1 5.66 5.66L33.66 124H100V48a4 4 0 0 1 8 0m126.83 77.17l-32-32a4 4 0 0 0-5.66 5.66L222.34 124H156V48a4 4 0 0 0-8 0v160a4 4 0 0 0 8 0v-76h66.34l-25.17 25.17a4 4 0 0 0 5.66 5.66l32-32a4 4 0 0 0 0-5.66");
}
</style><path class="hsqy1jb9y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:split-horizontal-thin"} {...others} />);
}

export default Component;
