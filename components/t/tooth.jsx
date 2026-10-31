import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/epf56ybih.css';
import '../../css/w/w87jgv8xy.css';
import '../../css/p/pfj332bkg.css';
import '../../css/a/aon7a3s-e.css';
import '../../css/w/wdyeppbmj.css';
import '../../css/x/xy6u-q_nj.css';
import '../../css/p/pzme55b_e.css';
import '../../css/f/fff05sh5i.css';
import '../../css/n/n8wb0wbuf.css';
import '../../css/r/rh-0mpbfz.css';
import '../../css/h/hve-7cbnq.css';
import '../../css/m/m2xy23zwv.css';
import '../../css/k/kz24yqbjx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="epf56ybih wm-shadow"/><path class="w87jgv8xy"/><path class="pfj332bkg"/><path class="aon7a3s-e"/><path class="wdyeppbmj"/><path class="xy6u-q_nj"/><path class="pzme55b_e"/><path class="fff05sh5i"/><path class="n8wb0wbuf"/><path class="rh-0mpbfz wm-shine"/><path class="hve-7cbnq wm-shine"/><path class="m2xy23zwv"/><path class="kz24yqbjx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-luxe:tooth"} {...others} />);
}

export default Component;
