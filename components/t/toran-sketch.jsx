import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/rqhbxpmil.css';
import '../../css/s/sd6unnbbl.css';
import '../../css/f/f7sc4du7o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="rqhbxpmil"/><path class="sd6unnbbl wm-k"/><path class="f7sc4du7o wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:toran-sketch"} {...others} />);
}

export default Component;
