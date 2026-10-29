import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/jzynihb1h.css';
import '../../css/x/xruxbuhom.css';
import '../../css/w/wjgsuii2v.css';
import '../../css/y/yis2aibtu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="jzynihb1h wm-k"/><path class="wm-a xruxbuhom"/><path class="wjgsuii2v wm-k"/><path class="wm-a yis2aibtu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:scan-barcode-sketch"} {...others} />);
}

export default Component;
