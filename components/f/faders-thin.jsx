import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.ev67t--1w {
  fill: currentColor;
  d: path("M132 120v96a4 4 0 0 1-8 0v-96a4 4 0 0 1 8 0m68 76a4 4 0 0 0-4 4v16a4 4 0 0 0 8 0v-16a4 4 0 0 0-4-4m24-32h-20V40a4 4 0 0 0-8 0v124h-20a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8m-168 0a4 4 0 0 0-4 4v48a4 4 0 0 0 8 0v-48a4 4 0 0 0-4-4m24-32H60V40a4 4 0 0 0-8 0v92H32a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8m72-48h-20V40a4 4 0 0 0-8 0v44h-20a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8");
}
</style><path class="ev67t--1w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:faders-thin"} {...others} />);
}

export default Component;
