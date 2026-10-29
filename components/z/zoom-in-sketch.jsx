import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/iecs1vn-f.css';
import '../../css/m/mqlblbcbw.css';
import '../../css/f/f6a0n6n9n.css';
import '../../css/u/u2d2ebb7e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="iecs1vn-f"/><path class="mqlblbcbw wm-a"/><path class="f6a0n6n9n wm-k"/><path class="u2d2ebb7e wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:zoom-in-sketch"} {...others} />);
}

export default Component;
