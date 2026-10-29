import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kz0vakbuf.css';
import '../../css/k/kquyx5rtg.css';
import '../../css/a/a3q34_bxk.css';
import '../../css/f/fuubjjbmb.css';
import '../../css/i/ife733qzx.css';
import '../../css/l/lxegmccvz.css';
import '../../css/i/idpott8lz.css';
import '../../css/l/l2kf2bb0u.css';
import '../../css/o/ofuw-tblp.css';
import '../../css/q/qqrnz1bwu.css';
import '../../css/j/jt5u6wr0q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kz0vakbuf wm-shadow"/><path class="kquyx5rtg wm-k"/><path class="a3q34_bxk wm-k"/><path class="fuubjjbmb wm-k"/><path class="ife733qzx wm-k"/><path class="lxegmccvz wm-shine"/><path class="idpott8lz wm-a"/><path class="l2kf2bb0u wm-a"/><path class="ofuw-tblp wm-a"/><path class="qqrnz1bwu wm-a"/><path class="jt5u6wr0q wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:bluetooth"} {...others} />);
}

export default Component;
