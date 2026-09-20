import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.ygsldg17y {
  fill: currentColor;
  d: path("M206 88v88a6 6 0 0 1-12 0V88a50 50 0 0 0-100 0v121.51l37.76-37.75a6 6 0 0 1 8.48 8.48l-48 48a6 6 0 0 1-8.48 0l-48-48a6 6 0 0 1 8.48-8.48L82 209.51V88a62 62 0 0 1 124 0");
}
</style><path class="ygsldg17y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrow-u-left-down-light"} {...others} />);
}

export default Component;
