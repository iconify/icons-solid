import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/vcj0rxbfv.css';
import '../../css/u/uam27y2rr.css';
import '../../css/r/r8t9kbczu.css';
import '../../css/r/rj-hvabwd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="vcj0rxbfv"/><path class="uam27y2rr wm-k"/><path class="r8t9kbczu wm-k"/><path class="rj-hvabwd wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:thumbs-up-sketch"} {...others} />);
}

export default Component;
