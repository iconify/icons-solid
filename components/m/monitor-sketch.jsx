import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/cvoru2btt.css';
import '../../css/r/r9pevev-u.css';
import '../../css/u/u606cnbwx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="cvoru2btt wm-a"/><path class="r9pevev-u wm-k"/><path class="u606cnbwx wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:monitor-sketch"} {...others} />);
}

export default Component;
