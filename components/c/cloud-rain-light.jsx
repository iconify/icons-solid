import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.p637276vu {
  fill: currentColor;
  d: path("m157 195.33l-32 48a6 6 0 1 1-10-6.66l32-48a6 6 0 0 1 10 6.66M230 92a74.09 74.09 0 0 1-74 74h-24.79L101 211.33a6 6 0 1 1-10-6.66L116.79 166H76a50 50 0 1 1 10.2-99A74.08 74.08 0 0 1 230 92m-12 0a62.06 62.06 0 0 0-124-3.65a6 6 0 0 1-12-.7a76 76 0 0 1 1.07-9A38 38 0 1 0 76 154h80a62.07 62.07 0 0 0 62-62");
}
</style><path class="p637276vu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:cloud-rain-light"} {...others} />);
}

export default Component;
