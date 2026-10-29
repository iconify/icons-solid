import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jgembab_c.css';
import '../../css/m/mlgntehqq.css';
import '../../css/u/ue8jz6i5f.css';
import '../../css/g/gxmwarbpa.css';
import '../../css/o/oluah2b8g.css';
import '../../css/d/dfju9obrx.css';
import '../../css/h/hq684lbqz.css';
import '../../css/p/pvrq2vb9f.css';
import '../../css/t/tw99vcb3s.css';
import '../../css/b/btddxdgsf.css';
import '../../css/f/f22lmxllx.css';
import '../../css/i/im582ocks.css';
import '../../css/g/gcbx1rk7c.css';
import '../../css/j/jv2x49ddb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="jgembab_c wm-a"/><path class="mlgntehqq wm-a"/><path class="ue8jz6i5f wm-a"/><path class="gxmwarbpa wm-k"/><path class="oluah2b8g wm-k"/><path class="dfju9obrx wm-k"/><path class="hq684lbqz wm-shine"/><path class="pvrq2vb9f wm-k"/><path class="tw99vcb3s wm-k"/><path class="btddxdgsf wm-a"/><path class="f22lmxllx wm-a"/><path class="im582ocks wm-a"/><path class="gcbx1rk7c wm-a"/><path class="jv2x49ddb wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:camera"} {...others} />);
}

export default Component;
