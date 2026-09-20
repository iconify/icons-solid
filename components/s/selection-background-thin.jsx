import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.hvs528yfs {
  fill: currentColor;
  d: path("M160 84H48a12 12 0 0 0-12 12v112a12 12 0 0 0 12 12h112a12 12 0 0 0 12-12V96a12 12 0 0 0-12-12m4 124a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V96a4 4 0 0 1 4-4h112a4 4 0 0 1 4 4ZM140 40a4 4 0 0 1 4-4h16a4 4 0 0 1 0 8h-16a4 4 0 0 1-4-4m80 8v8a4 4 0 0 1-8 0v-8a4 4 0 0 0-4-4h-8a4 4 0 0 1 0-8h8a12 12 0 0 1 12 12m0 48v16a4 4 0 0 1-8 0V96a4 4 0 0 1 8 0m0 56v8a12 12 0 0 1-12 12h-8a4 4 0 0 1 0-8h8a4 4 0 0 0 4-4v-8a4 4 0 0 1 8 0M84 56v-8a12 12 0 0 1 12-12h8a4 4 0 0 1 0 8h-8a4 4 0 0 0-4 4v8a4 4 0 0 1-8 0");
}
</style><path class="hvs528yfs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:selection-background-thin"} {...others} />);
}

export default Component;
