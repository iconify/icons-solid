import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.yfmq6yblk {
  fill: currentColor;
  d: path("M232 208a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8V48a8 8 0 0 1 16 0v152h184a8 8 0 0 1 8 8m-100-48a12 12 0 1 0-12-12a12 12 0 0 0 12 12m-24-56a12 12 0 1 0-12-12a12 12 0 0 0 12 12m-32 72a12 12 0 1 0-12-12a12 12 0 0 0 12 12m96-48a12 12 0 1 0-12-12a12 12 0 0 0 12 12m24-40a12 12 0 1 0-12-12a12 12 0 0 0 12 12m-20 76a12 12 0 1 0 12-12a12 12 0 0 0-12 12");
}
</style><path class="yfmq6yblk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:chart-scatter"} {...others} />);
}

export default Component;
