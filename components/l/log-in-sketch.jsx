import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/l4ne79z1h.css';
import '../../css/o/ok0419bhs.css';
import '../../css/v/vt7mo6bvk.css';
import '../../css/t/tfxarxbqc.css';
import '../../css/o/owcf405tn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="l4ne79z1h"/><path class="ok0419bhs wm-k"/><path class="vt7mo6bvk wm-a"/><path class="tfxarxbqc wm-k"/><path class="owcf405tn wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:log-in-sketch"} {...others} />);
}

export default Component;
