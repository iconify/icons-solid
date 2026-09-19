import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.gm294eq9o {
  fill: currentColor;
  d: path("M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m-9.833 56.213V5.787A27.9 27.9 0 0 1 32 4c3.459 0 6.771.635 9.834 1.787v52.426A27.9 27.9 0 0 1 32 60a27.9 27.9 0 0 1-9.833-1.787");
}
</style><path class="gm294eq9o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione-monotone:flag-for-belgium"} {...others} />);
}

export default Component;
