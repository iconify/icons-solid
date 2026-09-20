import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uw4wfdc_s {
  fill: currentColor;
  d: path("M4 18V6h16v12zm1-1h14V7H5zm0 0V7z");
}
</style><path class="uw4wfdc_s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:crop-7-5-outline-sharp"} {...others} />);
}

export default Component;
