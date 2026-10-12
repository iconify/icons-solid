import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s1a2eew1e.css';
import '../../css/g/gm1ccio_t.css';
import '../../css/r/rojk_bdub.css';
import '../../css/u/uc4otszln.css';
import '../../css/q/qj4n1fmer.css';
import '../../css/u/usesapx5s.css';
import '../../css/c/cydlk4b-d.css';
import '../../css/b/b_8soimpq.css';
import '../../css/x/xluwz1_7w.css';
import '../../css/b/bsqxvy6ef.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="s1a2eew1e"/><path clip-rule="evenodd" class="gm1ccio_t"/><path class="rojk_bdub"/><path class="uc4otszln"/><path class="qj4n1fmer"/><path class="usesapx5s"/><path class="cydlk4b-d"/><path class="b_8soimpq"/><path class="xluwz1_7w"/><path class="bsqxvy6ef"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:vault-duotone"} {...others} />);
}

export default Component;
