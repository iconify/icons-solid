import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.lfbgqxu8c {
  fill: currentColor;
  d: path("M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m9.724 43.767L32 38.847l-9.726 6.92l3.674-11.255l-9.682-7.183h12.102L32 16.267l3.739 11.063h11.994l-9.682 7.183z");
}
</style><path class="lfbgqxu8c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione-monotone:flag-for-flag-vietnam"} {...others} />);
}

export default Component;
