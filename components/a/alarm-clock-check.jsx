import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/ze-dbzrfh.css';
import '../../css/q/q6oz3pbtu.css';
import '../../css/t/t3w4q0byb.css';
import '../../css/o/oq_s7cceq.css';
import '../../css/p/pqhlo2bac.css';
import '../../css/u/u7tu-cbdo.css';
import '../../css/p/p9otggbhl.css';
import '../../css/i/i1e1stb9f.css';
import '../../css/m/mv6ajp2mo.css';
import '../../css/s/siwqanm_i.css';
import '../../css/a/aoi926bnf.css';
import '../../css/c/coh475b3c.css';
import '../../css/o/ojg75ub7i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-shadow ze-dbzrfh"/><path class="q6oz3pbtu wm-k"/><path class="t3w4q0byb wm-k"/><path class="oq_s7cceq wm-k"/><path class="pqhlo2bac wm-k"/><path class="u7tu-cbdo wm-k"/><path class="p9otggbhl wm-shine"/><path class="i1e1stb9f wm-a"/><path class="mv6ajp2mo wm-a"/><path class="siwqanm_i wm-a"/><path class="aoi926bnf wm-a"/><path class="coh475b3c wm-s"/><path class="ojg75ub7i wm-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:alarm-clock-check"} {...others} />);
}

export default Component;
