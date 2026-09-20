import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.cl2d54bvf {
  fill: currentColor;
  d: path("M204.4 51.6a108 108 0 1 0 0 152.8a108.16 108.16 0 0 0 0-152.8m-17 135.82a84 84 0 1 1 0-118.84a84.12 84.12 0 0 1 .02 118.84Zm-58.93-67.91a12 12 0 0 1 0 17l-32 32a12 12 0 0 1-17-17L103 128l-23.51-23.53a12 12 0 1 1 17-17Zm56 17l-32 32a12 12 0 0 1-17-17L159 128l-23.52-23.53a12 12 0 1 1 17-17l32 32a12 12 0 0 1 .03 17.02Z");
}
</style><path class="cl2d54bvf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:caret-circle-double-right-bold"} {...others} />);
}

export default Component;
