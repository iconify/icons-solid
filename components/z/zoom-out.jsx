import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bf84eebym.css';
import '../../css/t/t_-j9l4fn.css';
import '../../css/g/g-vm8kbkw.css';
import '../../css/b/bv984jjwx.css';
import '../../css/v/vfvak8bmi.css';
import '../../css/o/oeqejsblh.css';
import '../../css/b/bz6am9xpj.css';
import '../../css/g/ggfldzgby.css';
import '../../css/y/yocmlkpge.css';
import '../../css/n/nf4t5vj1n.css';
import '../../css/a/avg1m_pmc.css';
import '../../css/c/cu4uawdbq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="bf84eebym wm-k"/><path class="t_-j9l4fn wm-k"/><path class="g-vm8kbkw wm-k"/><path class="bv984jjwx wm-shine"/><path class="vfvak8bmi wm-k"/><path class="oeqejsblh wm-k"/><path class="bz6am9xpj wm-k"/><path class="ggfldzgby wm-shine"/><path class="wm-k yocmlkpge"/><path class="nf4t5vj1n wm-k"/><path class="avg1m_pmc wm-shine"/><path class="cu4uawdbq wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:zoom-out"} {...others} />);
}

export default Component;
