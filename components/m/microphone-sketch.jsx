import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/vu1ofi0mn.css';
import '../../css/a/a368k0bcb.css';
import '../../css/g/gjnqlbcln.css';
import '../../css/d/d6roupt_x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="vu1ofi0mn"/><path class="a368k0bcb wm-a"/><path class="gjnqlbcln wm-k"/><path class="d6roupt_x wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:microphone-sketch"} {...others} />);
}

export default Component;
