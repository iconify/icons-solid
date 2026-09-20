import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/ckbm37bkg.css';
import '../../css/q/q-evdcban.css';
import '../../css/v/vxpz4pvui.css';
import '../../css/c/cdsox1w9v.css';
import '../../css/x/x9mvs1_as.css';
import '../../css/v/vqyephr6g.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ckbm37bkg"/><path clip-rule="evenodd" class="q-evdcban"/><path class="vxpz4pvui"/><path clip-rule="evenodd" class="cdsox1w9v"/><path class="x9mvs1_as"/><path clip-rule="evenodd" class="vqyephr6g"/><path class="mo5netbri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:monitor-off"} {...others} />);
}

export default Component;
