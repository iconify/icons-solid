import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mqbzrfayw.css';
import '../../css/w/w_hy4vb-y.css';
import '../../css/b/b3fpycj7n.css';
import '../../css/q/q0cgvq-cl.css';
import '../../css/n/n3slgu3gg.css';
import '../../css/b/byg842bac.css';
import '../../css/w/wwuc0wbpq.css';
import '../../css/d/dgbagzkzq.css';
import '../../css/m/mcdsdck0y.css';
import '../../css/c/cnx43cc_a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mqbzrfayw wm-shadow"/><path class="w_hy4vb-y wm-k"/><path class="b3fpycj7n wm-k"/><path class="q0cgvq-cl wm-k"/><path class="n3slgu3gg wm-k"/><path class="byg842bac wm-k"/><path class="wm-shine wwuc0wbpq"/><path class="dgbagzkzq wm-a"/><path class="mcdsdck0y wm-a"/><path class="cnx43cc_a wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:mail"} {...others} />);
}

export default Component;
