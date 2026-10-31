import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mu0s5pb2b.css';
import '../../css/n/n1u_cmc2f.css';
import '../../css/g/ggwqsdbbr.css';
import '../../css/u/ugxkben9a.css';
import '../../css/l/l58qms9ya.css';
import '../../css/b/bieddld8h.css';
import '../../css/l/lajzz5b_v.css';
import '../../css/k/k4-bljbiv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="mu0s5pb2b wm-k"/><path class="n1u_cmc2f wm-s"/><path class="ggwqsdbbr wm-deco"/><path class="ugxkben9a wm-k"/><path class="l58qms9ya wm-s"/><path class="bieddld8h wm-shadow"/><path class="lajzz5b_v wm-shine"/><path class="k4-bljbiv wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:database-zap"} {...others} />);
}

export default Component;
