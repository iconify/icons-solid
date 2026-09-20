import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.gh_md2b-b {
  fill: currentColor;
  d: path("M204.4 51.6a108 108 0 1 0 0 152.8a108.16 108.16 0 0 0 0-152.8m-17 135.82a84 84 0 1 1 0-118.84a84.12 84.12 0 0 1 .02 118.84Zm-10.91-82.95L153 128l23.53 23.53a12 12 0 1 1-17 17l-32-32a12 12 0 0 1 0-17l32-32a12 12 0 0 1 17 17Zm-56 0L97 128l23.52 23.53a12 12 0 1 1-17 17l-32-32a12 12 0 0 1 0-17l32-32a12 12 0 1 1 17 17Z");
}
</style><path class="gh_md2b-b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:caret-circle-double-left-bold"} {...others} />);
}

export default Component;
