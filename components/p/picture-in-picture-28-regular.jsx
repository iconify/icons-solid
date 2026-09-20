import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.onj2i7buf {
  fill: currentColor;
  d: path("M24.5 15a2.5 2.5 0 0 1 2.5 2.5v6a2.5 2.5 0 0 1-2.5 2.5h-8a2.5 2.5 0 0 1-2.5-2.5v-6a2.5 2.5 0 0 1 2.5-2.5zM22.251 3a3.75 3.75 0 0 1 3.75 3.75V14h-1.5V6.75a2.25 2.25 0 0 0-2.25-2.25H5.754a2.25 2.25 0 0 0-2.25 2.25v12.5a2.25 2.25 0 0 0 2.25 2.25H13V23H5.754a3.75 3.75 0 0 1-3.75-3.75V6.75A3.75 3.75 0 0 1 5.754 3z");
}
</style><path class="onj2i7buf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:picture-in-picture-28-regular"} {...others} />);
}

export default Component;
