import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/do926x6ic.css';
import '../../css/t/tvvz7sbyy.css';
import '../../css/m/ms1wz--bn.css';
import '../../css/w/wnp_e7j0w.css';
import '../../css/u/u83h24b3i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="do926x6ic wm-k"/><path class="tvvz7sbyy wm-a"/><path class="ms1wz--bn wm-shadow"/><path class="wm-k wnp_e7j0w"/><path class="u83h24b3i wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:plane-takeoff-engrave"} {...others} />);
}

export default Component;
