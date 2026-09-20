import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.mo1guqb4z {
  fill: currentColor;
  d: path("M208 156H48a20 20 0 0 0-20 20v24a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20v-24a20 20 0 0 0-20-20m-4 40H52v-16h152Zm4-116H48a20 20 0 0 0-20 20v24a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20v-24a20 20 0 0 0-20-20m-4 40H52v-16h152ZM96 36a12 12 0 0 1 12-12h8v-8a12 12 0 0 1 24 0v8h8a12 12 0 0 1 0 24h-8v8a12 12 0 0 1-24 0v-8h-8a12 12 0 0 1-12-12");
}
</style><path class="mo1guqb4z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:rows-plus-top-bold"} {...others} />);
}

export default Component;
