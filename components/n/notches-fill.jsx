import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.c3h09xbhl {
  fill: currentColor;
  d: path("M200 40v152a8 8 0 0 1-8 8H40a8 8 0 0 1-5.66-13.66l152-152A8 8 0 0 1 200 40");
}
</style><path class="c3h09xbhl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:notches-fill"} {...others} />);
}

export default Component;
