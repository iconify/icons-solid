import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xwdcovb8d {
  fill: currentColor;
  d: path("M4 20v-1h16v1zm0-3.384V4h16v12.616zm1-1h14V5H5zm0 0V5z");
}
</style><path class="xwdcovb8d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:page-footer-outline-sharp"} {...others} />);
}

export default Component;
