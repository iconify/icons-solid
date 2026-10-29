import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kc037qbbp.css';
import '../../css/c/ca5sflbcm.css';
import '../../css/i/i_4_udbuh.css';
import '../../css/a/a5748qb6s.css';
import '../../css/r/rcv2ecpky.css';
import '../../css/m/m_jol-b2y.css';
import '../../css/w/w819fv8qk.css';
import '../../css/d/duirlpbfc.css';
import '../../css/m/m8lwz8bgg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kc037qbbp wm-shadow"/><path class="ca5sflbcm wm-k"/><path class="i_4_udbuh wm-k"/><path class="a5748qb6s wm-k"/><path class="rcv2ecpky wm-k"/><path class="m_jol-b2y wm-k"/><path class="w819fv8qk wm-shine"/><path class="duirlpbfc wm-a"/><path class="m8lwz8bgg wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:workflow"} {...others} />);
}

export default Component;
