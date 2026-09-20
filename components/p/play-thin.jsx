import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.b7qlwgwuq {
  fill: currentColor;
  d: path("M230.32 117.9L86.24 29.79a11.91 11.91 0 0 0-12.17-.23A11.71 11.71 0 0 0 68 39.89v176.22a11.71 11.71 0 0 0 6.07 10.33a11.91 11.91 0 0 0 12.17-.23l144.08-88.11a11.82 11.82 0 0 0 0-20.2m-4.18 13.37L82.06 219.39a4 4 0 0 1-4.07.07a3.77 3.77 0 0 1-2-3.35V39.89a3.77 3.77 0 0 1 2-3.35a4 4 0 0 1 4.07.07l144.08 88.12a3.8 3.8 0 0 1 0 6.54");
}
</style><path class="b7qlwgwuq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:play-thin"} {...others} />);
}

export default Component;
