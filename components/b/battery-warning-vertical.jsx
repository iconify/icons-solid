import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.g-mo0wb3k {
  fill: currentColor;
  d: path("M120 136V96a8 8 0 0 1 16 0v40a8 8 0 0 1-16 0m8 24a12 12 0 1 0 12 12a12 12 0 0 0-12-12M96 16h64a8 8 0 0 0 0-16H96a8 8 0 0 0 0 16m104 40v168a24 24 0 0 1-24 24H80a24 24 0 0 1-24-24V56a24 24 0 0 1 24-24h96a24 24 0 0 1 24 24m-16 0a8 8 0 0 0-8-8H80a8 8 0 0 0-8 8v168a8 8 0 0 0 8 8h96a8 8 0 0 0 8-8Z");
}
</style><path class="g-mo0wb3k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:battery-warning-vertical"} {...others} />);
}

export default Component;
