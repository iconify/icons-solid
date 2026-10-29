import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cic4xpwma.css';
import '../../css/t/tfo7ugbuz.css';
import '../../css/j/jv6p3edlb.css';
import '../../css/d/da1afraav.css';
import '../../css/c/cqtdv4btz.css';
import '../../css/w/w2ymfaccv.css';
import '../../css/k/kug85actp.css';
import '../../css/u/uu94u0bhm.css';
import '../../css/k/kdhq_obkr.css';
import '../../css/d/d6mht2bgt.css';
import '../../css/v/vry-zqb8r.css';
import '../../css/l/l6h1k6hmk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cic4xpwma wm-shadow"/><path class="tfo7ugbuz wm-k"/><path class="jv6p3edlb wm-k"/><path class="da1afraav wm-k"/><path class="cqtdv4btz wm-k"/><path class="w2ymfaccv wm-k"/><path class="kug85actp wm-shine"/><path class="uu94u0bhm wm-k"/><path class="kdhq_obkr wm-k"/><path class="d6mht2bgt wm-a"/><path class="vry-zqb8r wm-a"/><path class="l6h1k6hmk wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:cup-soda"} {...others} />);
}

export default Component;
