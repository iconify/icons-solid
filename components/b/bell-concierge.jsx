import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v7lbddbgl.css';
import '../../css/r/r3jqzrb6w.css';
import '../../css/p/pj_lutbcw.css';
import '../../css/b/bbhx5p0li.css';
import '../../css/u/uxuwxjxog.css';
import '../../css/w/wzqz-ehue.css';
import '../../css/b/bzak26bsy.css';
import '../../css/j/jkn8-5bbt.css';
import '../../css/q/qn6_kybzf.css';
import '../../css/v/v48fybcva.css';
import '../../css/m/m3_ztwa5b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="v7lbddbgl wm-a"/><path class="r3jqzrb6w wm-a"/><path class="pj_lutbcw wm-a"/><path class="bbhx5p0li wm-k"/><path class="uxuwxjxog wm-k"/><path class="wm-k wzqz-ehue"/><path class="bzak26bsy wm-shine"/><path class="jkn8-5bbt wm-k"/><path class="qn6_kybzf wm-k"/><path class="v48fybcva wm-k"/><path class="m3_ztwa5b wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:bell-concierge"} {...others} />);
}

export default Component;
