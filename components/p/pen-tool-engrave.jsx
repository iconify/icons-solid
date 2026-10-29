import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/sh7b6nbow.css';
import '../../css/g/g1toltbnd.css';
import '../../css/m/m-mvczblc.css';
import '../../css/n/nuurcfg1w.css';
import '../../css/l/lz811wb3l.css';
import '../../css/x/xkns3xb2a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="sh7b6nbow wm-k"/><path class="g1toltbnd wm-a"/><path class="m-mvczblc wm-shadow"/><path class="nuurcfg1w wm-k"/><path class="lz811wb3l wm-a"/><path class="wm-k xkns3xb2a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:pen-tool-engrave"} {...others} />);
}

export default Component;
