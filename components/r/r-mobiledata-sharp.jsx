import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gccnyv_vg {
  fill: currentColor;
  d: path("M3 10V3h6v4.277H7.723L8.885 10H7.846l-1.15-2.65H4V10zm1-3.65h4V4H4z");
}
</style><path class="gccnyv_vg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:r-mobiledata-sharp"} {...others} />);
}

export default Component;
