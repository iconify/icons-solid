import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/i9rokvtay.css';
import '../../css/l/l9kk9up3t.css';
import '../../css/n/nbqs_jbhc.css';
import '../../css/f/f0gl1lbkk.css';
import '../../css/c/cq2g5hyhp.css';
import '../../css/i/i4r-oo4mn.css';
import '../../css/u/urb88pujw.css';
import '../../css/t/ti3zodikm.css';
import '../../css/j/jzanbwdjx.css';
import '../../css/m/mv5xhylcy.css';
import '../../css/o/oce-01b9d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="i9rokvtay wm-k"/><path class="l9kk9up3t wm-a"/><path class="nbqs_jbhc wm-shadow"/><path class="f0gl1lbkk wm-k"/><path class="cq2g5hyhp wm-a"/><path class="i4r-oo4mn wm-k"/><path class="urb88pujw wm-a"/><path class="ti3zodikm wm-k"/><path class="jzanbwdjx wm-a"/><path class="mv5xhylcy wm-k"/><path class="oce-01b9d wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:loader-engrave"} {...others} />);
}

export default Component;
