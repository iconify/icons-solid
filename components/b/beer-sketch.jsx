import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/wfwb433hg.css';
import '../../css/y/yrv74sbtp.css';
import '../../css/j/jsqpoxyat.css';
import '../../css/t/tzhu-rhme.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="wfwb433hg wm-k"/><path class="wm-a yrv74sbtp"/><path class="jsqpoxyat wm-k"/><path class="tzhu-rhme wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:beer-sketch"} {...others} />);
}

export default Component;
