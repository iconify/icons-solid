import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/x1uri57tk.css';
import '../../css/g/gwmckxxys.css';
import '../../css/e/e7thydbbr.css';
import '../../css/o/o-lh5e-_p.css';
import '../../css/u/ux2p9gb1d.css';
import '../../css/z/z4bbp2bhq.css';
import '../../css/h/hl1gxsb1a.css';
import '../../css/w/wti3g3byz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="wm-k x1uri57tk"/><path class="gwmckxxys wm-a"/><path class="e7thydbbr wm-s"/><path class="o-lh5e-_p wm-shadow"/><path class="ux2p9gb1d wm-k"/><path class="wm-a z4bbp2bhq"/><path class="hl1gxsb1a wm-s"/><path class="wm-s wti3g3byz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:file-clock-engrave"} {...others} />);
}

export default Component;
