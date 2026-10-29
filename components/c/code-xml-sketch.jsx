import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/vescuyerh.css';
import '../../css/d/dyrbljpdb.css';
import '../../css/a/a-a796b8n.css';
import '../../css/g/g2xumw4-o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="vescuyerh wm-k"/><path class="dyrbljpdb wm-a"/><path class="a-a796b8n wm-k"/><path class="g2xumw4-o wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:code-xml-sketch"} {...others} />);
}

export default Component;
