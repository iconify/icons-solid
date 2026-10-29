import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/hoxpu_2cg.css';
import '../../css/x/xcvq1hf3w.css';
import '../../css/l/lv38v7jih.css';
import '../../css/h/hcaie_vox.css';
import '../../css/m/mce9chbnc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="hoxpu_2cg wm-k"/><path class="wm-a xcvq1hf3w"/><path class="lv38v7jih wm-shadow"/><path class="hcaie_vox wm-k"/><path class="mce9chbnc wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:hard-hat-engrave"} {...others} />);
}

export default Component;
