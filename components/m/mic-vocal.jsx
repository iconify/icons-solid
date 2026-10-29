import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zyoic1qlc.css';
import '../../css/l/l3gs801fg.css';
import '../../css/r/rp4no0zqm.css';
import '../../css/q/q2d_7suyv.css';
import '../../css/l/lutpv_-av.css';
import '../../css/d/d60jcccbu.css';
import '../../css/n/n9wu1-byr.css';
import '../../css/j/j-n7ttk6f.css';
import '../../css/j/jzkm53b_p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-k zyoic1qlc"/><path class="l3gs801fg wm-k"/><path class="rp4no0zqm wm-k"/><path class="q2d_7suyv wm-shine"/><path class="lutpv_-av wm-k"/><path class="d60jcccbu wm-k"/><path class="n9wu1-byr wm-k"/><path class="j-n7ttk6f wm-shine"/><path class="jzkm53b_p wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:mic-vocal"} {...others} />);
}

export default Component;
