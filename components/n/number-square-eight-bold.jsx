import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.yqnmr2b3g {
  fill: currentColor;
  d: path("M208 28H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 176H52V52h152ZM88 152a40 40 0 1 0 67.6-28.91a36 36 0 1 0-55.2 0A39.87 39.87 0 0 0 88 152m40 16a16 16 0 1 1 16-16a16 16 0 0 1-16 16m-12-68a12 12 0 1 1 12 12a12 12 0 0 1-12-12");
}
</style><path class="yqnmr2b3g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:number-square-eight-bold"} {...others} />);
}

export default Component;
