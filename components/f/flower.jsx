import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oau1ehb3v.css';
import '../../css/n/nvguqac8p.css';
import '../../css/v/v5q5pbbvs.css';
import '../../css/v/vpxyvwscw.css';
import '../../css/m/m2fgqubgs.css';
import '../../css/l/lfng06ozg.css';
import '../../css/s/s6m1p_bvw.css';
import '../../css/q/q78r_ibfk.css';
import '../../css/x/xghf1jcfu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="oau1ehb3v wm-k"/><path class="nvguqac8p wm-k"/><path class="v5q5pbbvs wm-k"/><path class="vpxyvwscw wm-shine"/><path class="m2fgqubgs wm-a"/><path class="lfng06ozg wm-a"/><path class="s6m1p_bvw wm-a"/><path class="q78r_ibfk wm-shine"/><path class="wm-a xghf1jcfu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:flower"} {...others} />);
}

export default Component;
