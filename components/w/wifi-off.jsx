import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dlzfzsc0j.css';
import '../../css/t/t8_c-noym.css';
import '../../css/a/a-8x7jb9s.css';
import '../../css/x/x7igpkx1h.css';
import '../../css/x/xxzqr3brq.css';
import '../../css/j/jjs66xb7g.css';
import '../../css/s/s4lxvfn3t.css';
import '../../css/t/tpmh60b-q.css';
import '../../css/d/d-885oeyg.css';
import '../../css/p/poxn4la5i.css';
import '../../css/n/nxjxdnb9w.css';
import '../../css/p/pjb4ihbqc.css';
import '../../css/h/hem0pbc7v.css';
import '../../css/p/pyjb_hidy.css';
import '../../css/x/xgit2obkh.css';
import '../../css/d/d6reu3bgk.css';
import '../../css/s/s78vpebyg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="dlzfzsc0j wm-shadow"/><path class="t8_c-noym wm-k"/><path class="a-8x7jb9s wm-k"/><path class="wm-k x7igpkx1h"/><path class="wm-k xxzqr3brq"/><path class="jjs66xb7g wm-k"/><path class="s4lxvfn3t wm-shine"/><path class="tpmh60b-q wm-s"/><path class="d-885oeyg wm-s"/><path class="poxn4la5i wm-s"/><path class="nxjxdnb9w wm-s"/><path class="pjb4ihbqc wm-s"/><path class="hem0pbc7v wm-s"/><path class="pyjb_hidy wm-s"/><path class="wm-s xgit2obkh"/><path class="d6reu3bgk wm-s"/><path class="s78vpebyg wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-luxe:wifi-off"} {...others} />);
}

export default Component;
