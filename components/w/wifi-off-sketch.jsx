import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/g7e_1fbda.css';
import '../../css/k/kda5nl4ib.css';
import '../../css/r/rzni5ydsb.css';
import '../../css/u/ur3zlfbzj.css';
import '../../css/i/ip8h3_xdk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="g7e_1fbda wm-k"/><path class="kda5nl4ib wm-k"/><circle class="rzni5ydsb wm-k"/><path class="ur3zlfbzj wm-s"/><path class="ip8h3_xdk wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:wifi-off-sketch"} {...others} />);
}

export default Component;
