import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.emxppbcld {
  fill: currentColor;
  d: path("M200 88v104a8 8 0 0 1-8 8H88a8 8 0 0 1 0-16h84.69L58.34 69.66a8 8 0 0 1 11.32-11.32L184 172.69V88a8 8 0 0 1 16 0");
}
</style><path class="emxppbcld"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrow-down-right"} {...others} />);
}

export default Component;
