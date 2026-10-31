import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bd8d48beu.css';
import '../../css/a/ace6b3l6l.css';
import '../../css/n/nr55p4bys.css';
import '../../css/c/crig_rjsw.css';
import '../../css/l/lvdq6kbft.css';
import '../../css/x/xaa0grb2n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="bd8d48beu wm-k"/><path class="ace6b3l6l wm-deco"/><path class="nr55p4bys wm-k"/><path class="crig_rjsw wm-shadow"/><path class="lvdq6kbft wm-shine"/><path class="wm-shine xaa0grb2n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:chef-hat"} {...others} />);
}

export default Component;
