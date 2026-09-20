import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.qsnhsgl1d {
  fill: currentColor;
  d: path("M217.47 38.53a36 36 0 0 0-57.95 41l-80 80a36.07 36.07 0 0 0-41 7a36 36 0 1 0 58 9.95l80-80a36 36 0 0 0 41-57.95Zm-145 162a12 12 0 1 1 0-17a12 12 0 0 1 .01 16.97Zm128-128a12 12 0 0 1-17 0a12 12 0 1 1 17 0");
}
</style><path class="qsnhsgl1d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:line-segment-bold"} {...others} />);
}

export default Component;
