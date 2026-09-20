import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.m3xqg6bjn {
  fill: currentColor;
  d: path("M208 36H48a20 20 0 0 0-20 20v144a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V56a20 20 0 0 0-20-20m-4 24v56H52V60ZM52 196v-56h152v56ZM160 88a16 16 0 1 1 16 16a16 16 0 0 1-16-16m32 80a16 16 0 1 1-16-16a16 16 0 0 1 16 16");
}
</style><path class="m3xqg6bjn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:hard-drives-bold"} {...others} />);
}

export default Component;
