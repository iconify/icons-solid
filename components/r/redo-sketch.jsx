import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/pmgr_fqgg.css';
import '../../css/g/gpu50ftma.css';
import '../../css/s/s36pesbba.css';
import '../../css/e/enuleymwy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="pmgr_fqgg wm-k"/><path class="gpu50ftma wm-a"/><path class="s36pesbba wm-k"/><path class="enuleymwy wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:redo-sketch"} {...others} />);
}

export default Component;
