import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.grb94rbwh {
  fill: currentColor;
  d: path("M200 32v144a8 8 0 0 1-8 8h-88v40a8 8 0 0 1-13.66 5.66l-48-48a8 8 0 0 1 0-11.32l48-48A8 8 0 0 1 104 128v40h80V32a8 8 0 0 1 16 0");
}
</style><path class="grb94rbwh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrow-elbow-down-left-fill"} {...others} />);
}

export default Component;
