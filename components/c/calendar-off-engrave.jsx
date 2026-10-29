import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/nppl1-skp.css';
import '../../css/h/hcptmrbif.css';
import '../../css/o/ol-kpp5cg.css';
import '../../css/f/fl-dm4pzr.css';
import '../../css/b/biv-r_b9a.css';
import '../../css/y/yk993owos.css';
import '../../css/q/qr4ochb5c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="nppl1-skp wm-k"/><path class="hcptmrbif wm-a"/><path class="ol-kpp5cg wm-s"/><path class="fl-dm4pzr wm-shadow"/><path class="biv-r_b9a wm-k"/><path class="wm-a yk993owos"/><path class="qr4ochb5c wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:calendar-off-engrave"} {...others} />);
}

export default Component;
