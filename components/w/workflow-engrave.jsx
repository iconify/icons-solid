import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/blor6etyc.css';
import '../../css/m/m49hu2bxr.css';
import '../../css/v/v1kuu0bke.css';
import '../../css/u/uq6pq445a.css';
import '../../css/y/yrgiqhxka.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="blor6etyc wm-k"/><path class="m49hu2bxr wm-a"/><path class="v1kuu0bke wm-shadow"/><path class="uq6pq445a wm-k"/><path class="wm-a yrgiqhxka"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:workflow-engrave"} {...others} />);
}

export default Component;
