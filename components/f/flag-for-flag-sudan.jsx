import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.yjf1kmbav {
  fill: currentColor;
  d: path("M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m-8.419 39.833L12.935 52.479a28 28 0 0 1-1.414-1.414L30.586 32L11.521 12.935a29 29 0 0 1 1.413-1.414L23.58 22.167h34.633C59.365 25.228 60 28.54 60 32s-.635 6.772-1.787 9.833z");
}
</style><path class="yjf1kmbav"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione-monotone:flag-for-flag-sudan"} {...others} />);
}

export default Component;
