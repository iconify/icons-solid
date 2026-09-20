import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.zbu7n5o_d {
  fill: currentColor;
  d: path("M204 208a4 4 0 0 1-4 4H48a4 4 0 0 1 0-8h152a4 4 0 0 1 4 4m-4-44h-96a52 52 0 0 1 0-104h96a4 4 0 0 0 0-8h-96a60 60 0 0 0 0 120h96a4 4 0 0 0 0-8");
}
</style><path class="zbu7n5o_d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:subset-of-thin"} {...others} />);
}

export default Component;
