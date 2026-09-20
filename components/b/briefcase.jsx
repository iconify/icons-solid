import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s26j4wm-d.css';
import '../../css/k/kdvig2b8s.css';
import '../../css/s/slfjff4ga.css';
import '../../css/u/ucm6ui5ss.css';
import '../../css/q/quor1ob9m.css';
import '../../css/i/i_hd_0b0i.css';
import '../../css/s/snren_o7w.css';
import '../../css/l/lhbm-blck.css';
import '../../css/f/f1_xspbdj.css';
import '../../css/m/meu9l-6xg.css';
import '../../css/l/l7mah1emb.css';
import '../../css/i/ivfbccx6b.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="s26j4wm-d"/><path class="kdvig2b8s"/><path class="slfjff4ga"/><path class="ucm6ui5ss"/><path class="quor1ob9m"/><path class="i_hd_0b0i"/><path class="snren_o7w"/><path class="lhbm-blck"/><path class="f1_xspbdj"/><path class="meu9l-6xg"/><path class="l7mah1emb"/><path class="ivfbccx6b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:briefcase"} {...others} />);
}

export default Component;
