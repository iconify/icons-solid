import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.phz40jbie {
  fill: currentColor;
  d: path("M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m-9.833 56.213V5.787C25.228 4.635 28.541 4 32 4s6.771.635 9.834 1.787v52.426C38.771 59.365 35.459 60 32 60s-6.772-.635-9.833-1.787");
}
</style><path class="phz40jbie"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione-monotone:flag-for-france"} {...others} />);
}

export default Component;
