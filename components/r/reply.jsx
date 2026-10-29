import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zyfae5blx.css';
import '../../css/b/bfecbevlf.css';
import '../../css/d/diyy9pbwa.css';
import '../../css/i/ih9r84btp.css';
import '../../css/i/ii-77gbho.css';
import '../../css/w/wn-ixyjbk.css';
import '../../css/d/d14tttb5h.css';
import '../../css/e/eagb68ihj.css';
import '../../css/e/ejvdnxwsf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-shadow zyfae5blx"/><path class="bfecbevlf wm-shadow"/><path class="diyy9pbwa"/><path class="ih9r84btp"/><path class="ii-77gbho"/><path class="wn-ixyjbk"/><path class="d14tttb5h wm-shine"/><path class="eagb68ihj wm-shine"/><path class="ejvdnxwsf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:reply"} {...others} />);
}

export default Component;
