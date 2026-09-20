import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vun63ebyc.css';
import '../../css/x/xen266bam.css';
import '../../css/d/dypv3-mdc.css';
import '../../css/q/qa4xkpbrd.css';
import '../../css/x/xo4glgvtf.css';

const viewBox = {"width":16,"height":16};
const content = `<defs><linearGradient id="SVGmQwji3QR" x1="7.645" x2="4.454" y1="3.452" y2="6.643" gradientUnits="userSpaceOnUse"><stop offset=".15" class="vun63ebyc"/><stop offset=".85" class="xen266bam"/></linearGradient></defs><path class="dypv3-mdc"/><path class="qa4xkpbrd"/><path fill="url(#SVGmQwji3QR)" class="xo4glgvtf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-turborepo"} {...others} />);
}

export default Component;
