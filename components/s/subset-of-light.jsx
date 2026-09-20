import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.e9cu8_ejv {
  fill: currentColor;
  d: path("M206 208a6 6 0 0 1-6 6H48a6 6 0 0 1 0-12h152a6 6 0 0 1 6 6m-6-46h-96a50 50 0 0 1 0-100h96a6 6 0 0 0 0-12h-96a62 62 0 0 0 0 124h96a6 6 0 0 0 0-12");
}
</style><path class="e9cu8_ejv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:subset-of-light"} {...others} />);
}

export default Component;
