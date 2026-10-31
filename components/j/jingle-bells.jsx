import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kqy-0qb5z.css';
import '../../css/f/fydjbpkau.css';
import '../../css/y/yskm2_s6d.css';
import '../../css/q/qyj-pwa2u.css';
import '../../css/f/feyfl7kbm.css';
import '../../css/p/p9zet7bvy.css';
import '../../css/h/hldfacf1r.css';
import '../../css/e/eppfstb6v.css';
import '../../css/q/qeqx4rntf.css';
import '../../css/q/qmiplkxxh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="kqy-0qb5z wm-k"/><path class="fydjbpkau wm-a"/><path class="wm-s yskm2_s6d"/><path class="qyj-pwa2u wm-k"/><path class="feyfl7kbm wm-k"/><path class="p9zet7bvy wm-a"/><path class="hldfacf1r wm-s"/><path class="eppfstb6v wm-shadow"/><path class="qeqx4rntf wm-shine"/><path class="qmiplkxxh wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:jingle-bells"} {...others} />);
}

export default Component;
