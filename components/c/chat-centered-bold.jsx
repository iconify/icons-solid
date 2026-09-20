import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.gkapk37fa {
  fill: currentColor;
  d: path("M216 36H40a20 20 0 0 0-20 20v128a20 20 0 0 0 20 20h58.11l12.52 21.92a20 20 0 0 0 34.74 0L157.89 204H216a20 20 0 0 0 20-20V56a20 20 0 0 0-20-20m-4 144h-61.07a12 12 0 0 0-10.42 6.05L128 207.94l-12.51-21.89a12 12 0 0 0-10.42-6.05H44V60h168Z");
}
</style><path class="gkapk37fa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:chat-centered-bold"} {...others} />);
}

export default Component;
