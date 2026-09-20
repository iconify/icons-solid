import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.foga1951z {
  fill: currentColor;
  d: path("M232 56a104.11 104.11 0 0 1-104 104H88v40a8 8 0 0 1-13.66 5.66l-48-48a8 8 0 0 1 0-11.32l48-48A8 8 0 0 1 88 104v40h40a88.1 88.1 0 0 0 88-88a8 8 0 0 1 16 0");
}
</style><path class="foga1951z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrow-bend-down-left-fill"} {...others} />);
}

export default Component;
