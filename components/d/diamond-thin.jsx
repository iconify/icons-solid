import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.y_6isob3h {
  fill: currentColor;
  d: path("m232.5 119.55l-96.05-96.06a12 12 0 0 0-16.9 0l-96 96.06a12 12 0 0 0 0 16.9l96.05 96.06a12 12 0 0 0 16.9 0l96.05-96.06a12 12 0 0 0 0-16.9Zm-5.66 11.24l-96.05 96.06a4 4 0 0 1-5.58 0l-96-96.06a3.94 3.94 0 0 1 0-5.58l96.05-96.06a4 4 0 0 1 5.58 0l96.05 96.06a3.94 3.94 0 0 1 0 5.58Z");
}
</style><path class="y_6isob3h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:diamond-thin"} {...others} />);
}

export default Component;
