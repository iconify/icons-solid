import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wx71ttb2k.css';
import '../../css/c/cci0p2vdm.css';
import '../../css/a/a912tebmm.css';
import '../../css/h/hg2_3g_gr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-k wx71ttb2k"/><path class="cci0p2vdm wm-k"/><path class="a912tebmm wm-shadow"/><path class="hg2_3g_gr wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:wheat"} {...others} />);
}

export default Component;
