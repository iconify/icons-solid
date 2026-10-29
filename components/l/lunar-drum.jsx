import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mymtxlbif.css';
import '../../css/q/ql50srbzb.css';
import '../../css/s/sla9ccbde.css';
import '../../css/u/uoju-z_9h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="mymtxlbif"/><path class="ql50srbzb"/><path class="sla9ccbde wm-s"/><path class="uoju-z_9h wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:lunar-drum"} {...others} />);
}

export default Component;
