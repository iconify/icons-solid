import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/oubg7rbmf.css';
import '../../css/n/na0fz3f1u.css';
import '../../css/e/ed5dmbefl.css';
import '../../css/k/knf-w_g_n.css';
import '../../css/c/c96fvtbfs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="oubg7rbmf wm-k"/><path class="na0fz3f1u wm-a"/><path class="ed5dmbefl wm-shadow"/><path class="knf-w_g_n wm-k"/><path class="c96fvtbfs wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:guitar-engrave"} {...others} />);
}

export default Component;
