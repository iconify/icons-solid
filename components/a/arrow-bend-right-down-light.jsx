import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.upiyobcua {
  fill: currentColor;
  d: path("m204.24 180.24l-48 48a6 6 0 0 1-8.48 0l-48-48a6 6 0 0 1 8.48-8.48L146 209.51V128a90.1 90.1 0 0 0-90-90a6 6 0 0 1 0-12a102.12 102.12 0 0 1 102 102v81.51l37.76-37.75a6 6 0 0 1 8.48 8.48");
}
</style><path class="upiyobcua"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrow-bend-right-down-light"} {...others} />);
}

export default Component;
