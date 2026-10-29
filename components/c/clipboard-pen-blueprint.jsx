import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/o/oanxkjb8l.css';
import '../../css/i/izc_z-6_e.css';
import '../../css/d/ddi_6-bmh.css';
import '../../css/w/wt1v_zblm.css';
import '../../css/p/pkh-xrbyj.css';
import '../../css/o/oh37a5f2v.css';
import '../../css/j/jdu-bacnc.css';
import '../../css/a/ayf8ztfis.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="oanxkjb8l wm-deco"/><path class="izc_z-6_e wm-deco"/><path class="ddi_6-bmh wm-deco"/><path class="wm-k wt1v_zblm"/><path class="pkh-xrbyj wm-a"/><path class="oh37a5f2v wm-s"/><path class="jdu-bacnc wm-k"/><path class="ayf8ztfis wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:clipboard-pen-blueprint"} {...others} />);
}

export default Component;
