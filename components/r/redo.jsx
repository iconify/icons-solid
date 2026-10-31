import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/n/nabjto59j.css';
import '../../css/e/e7970wbtu.css';
import '../../css/t/tdwb05b8n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="nabjto59j wm-k"/><path class="e7970wbtu wm-a"/><path class="tdwb05b8n wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:redo"} {...others} />);
}

export default Component;
