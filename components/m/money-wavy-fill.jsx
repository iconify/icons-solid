import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.kjbbcfkpm {
  fill: currentColor;
  d: path("M244.24 60a8 8 0 0 0-7.75-.4c-42.93 21-73.59 11.16-106 .78c-34.09-10.85-69.29-22.1-118 1.68A8 8 0 0 0 8 69.24v119.93a8 8 0 0 0 11.51 7.19c42.93-21 73.59-11.16 106.05-.78c19.24 6.15 38.84 12.42 61 12.42c17.09 0 35.73-3.72 56.91-14.06a8 8 0 0 0 4.49-7.18V66.83a8 8 0 0 0-3.72-6.83M48 152a8 8 0 0 1-16 0V88a8 8 0 0 1 16 0Zm80 8a32 32 0 1 1 32-32a32 32 0 0 1-32 32m96 8a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Z");
}
</style><path class="kjbbcfkpm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:money-wavy-fill"} {...others} />);
}

export default Component;
