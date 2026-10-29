import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/xw_vi2g7o.css';
import '../../css/n/npauvw-9g.css';
import '../../css/c/c16hh-b9v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="wm-a xw_vi2g7o"/><path class="npauvw-9g wm-k"/><path class="c16hh-b9v wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:chart-bar-horizontal-sketch"} {...others} />);
}

export default Component;
