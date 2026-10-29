import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/r0k_789eh.css';
import '../../css/z/zgq5wtbpl.css';
import '../../css/k/k119jwb1b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="r0k_789eh wm-k"/><path class="wm-k zgq5wtbpl"/><path class="k119jwb1b wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:bitcoin-sketch"} {...others} />);
}

export default Component;
