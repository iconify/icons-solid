import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hfvdmn1hc.css';
import '../../css/w/wdnwa_xpn.css';
import '../../css/f/fmhn5-0_m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hfvdmn1hc"/><path class="wdnwa_xpn"/><path class="fmhn5-0_m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:archive-box"} {...others} />);
}

export default Component;
