import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nf-m-pb4i.css';
import '../../css/f/f35_upf1s.css';
import '../../css/r/riz6r1bsj.css';
import '../../css/u/uov1522zd.css';
import '../../css/v/vtfg3dzet.css';
import '../../css/h/hpi6j6bze.css';
import '../../css/u/ujj5f1bgx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="nf-m-pb4i wm-k"/><path class="f35_upf1s wm-k"/><path class="riz6r1bsj wm-k"/><path class="uov1522zd wm-shadow"/><path class="vtfg3dzet wm-shine"/><path class="hpi6j6bze wm-shine"/><path class="ujj5f1bgx wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:passport"} {...others} />);
}

export default Component;
