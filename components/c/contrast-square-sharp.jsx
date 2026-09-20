import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lzsfkwb-u {
  fill: currentColor;
  d: path("M4 20V4h16v16zm1-1h14V5zm1.289-9.827h2v2h.884v-2h2v-.885h-2v-2h-.885v2h-2zm10.698 6.423h-4.385v-.884h4.385z");
}
</style><path class="lzsfkwb-u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:contrast-square-sharp"} {...others} />);
}

export default Component;
