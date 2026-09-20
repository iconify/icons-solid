import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.uyv0kpbjn {
  fill: currentColor;
  d: path("m12 111l112 64a8 8 0 0 0 7.94 0l112-64a8 8 0 0 0 0-13.9l-112-64a8 8 0 0 0-7.94 0l-112 64a8 8 0 0 0 0 13.9m116-61.79L223.87 104L128 158.79L32.13 104ZM246.94 140a8 8 0 0 1-2.94 11l-112 64a8 8 0 0 1-7.94 0L12 151a8 8 0 0 1 8-13.95l108 61.74l108-61.74a8 8 0 0 1 10.94 2.95");
}
</style><path class="uyv0kpbjn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:stack-simple"} {...others} />);
}

export default Component;
