import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o3d5cybou.css';
import '../../css/x/x65a5bbjn.css';
import '../../css/k/k05j9qbba.css';
import '../../css/i/ifhkb4x4u.css';
import '../../css/t/tvck1iikv.css';
import '../../css/g/gnfre_pfc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="o3d5cybou wm-k"/><path class="wm-deco x65a5bbjn"/><path class="k05j9qbba wm-k"/><path class="ifhkb4x4u wm-k"/><path class="tvck1iikv wm-shadow"/><path class="gnfre_pfc wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:file-down"} {...others} />);
}

export default Component;
