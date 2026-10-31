import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/t/tvqqkwb_v.css';
import '../../css/w/wlggx9swr.css';
import '../../css/v/vh4m4rxol.css';
import '../../css/c/ce4_fwbku.css';
import '../../css/a/as1lrtf1n.css';
import '../../css/m/m49zq56rc.css';
import '../../css/e/er7voiocx.css';
import '../../css/i/ipi8n2bup.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="tvqqkwb_v"/><path class="wlggx9swr"/><path class="vh4m4rxol wm-shine"/><path class="ce4_fwbku wm-k"/><path class="as1lrtf1n wm-a"/><path class="m49zq56rc"/><path class="er7voiocx"/><path class="ipi8n2bup wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:printer"} {...others} />);
}

export default Component;
