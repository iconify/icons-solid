import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/smk8oqcsa.css';
import '../../css/f/fl_543omz.css';
import '../../css/m/m1tgc9b5g.css';
import '../../css/o/o-hevlbrc.css';
import '../../css/i/i6psvxipm.css';
import '../../css/t/t_58z-irj.css';
import '../../css/s/s6ojjsbqb.css';
import '../../css/i/i95oiwkpf.css';
import '../../css/x/xi9o0ubps.css';
import '../../css/k/k3jiij_yh.css';
import '../../css/k/kwzix_bcg.css';
import '../../css/t/tofrclbyz.css';
import '../../css/f/fsf0iqzmg.css';
import '../../css/j/j8sdixgep.css';
import '../../css/m/mkcfpgbcg.css';
import '../../css/p/pts30actx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="smk8oqcsa"/><path class="fl_543omz"/><path class="m1tgc9b5g"/><path class="o-hevlbrc"/><path class="i6psvxipm"/><path class="t_58z-irj"/><path class="s6ojjsbqb"/><path class="i95oiwkpf"/><path class="xi9o0ubps"/><path class="k3jiij_yh"/><path class="kwzix_bcg"/><path class="tofrclbyz"/><path class="fsf0iqzmg"/><path class="j8sdixgep"/><path class="mkcfpgbcg"/><path class="pts30actx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:bookwyrm"} {...others} />);
}

export default Component;
