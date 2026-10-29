import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/fbmbkx9cs.css';
import '../../css/y/y1uqs6cnl.css';
import '../../css/a/aencmfh2m.css';
import '../../css/d/dk__gyjbs.css';
import '../../css/q/qg_pme__y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="fbmbkx9cs wm-k"/><path class="wm-a y1uqs6cnl"/><path class="aencmfh2m wm-shadow"/><path class="dk__gyjbs wm-k"/><path class="qg_pme__y wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:arrow-down-left-engrave"} {...others} />);
}

export default Component;
