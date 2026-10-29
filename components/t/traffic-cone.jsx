import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w518ozpwb.css';
import '../../css/g/grunccx4g.css';
import '../../css/p/phz9mdv1m.css';
import '../../css/l/lxzxcabqn.css';
import '../../css/b/bdnh1xblu.css';
import '../../css/z/zytiveb8r.css';
import '../../css/q/q_i6v-b6v.css';
import '../../css/b/bxqbftbxx.css';
import '../../css/d/d2ahbvbxe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="w518ozpwb wm-k"/><path class="grunccx4g wm-k"/><path class="phz9mdv1m wm-k"/><path class="lxzxcabqn wm-k"/><path class="bdnh1xblu wm-k"/><path class="wm-k zytiveb8r"/><path class="q_i6v-b6v wm-shine"/><path class="bxqbftbxx wm-a"/><path class="d2ahbvbxe wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:traffic-cone"} {...others} />);
}

export default Component;
