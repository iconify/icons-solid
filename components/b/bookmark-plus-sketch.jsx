import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/t7wgm3bcf.css';
import '../../css/d/duwkm8_od.css';
import '../../css/r/re13p-ksd.css';
import '../../css/e/eyw-z6bdb.css';
import '../../css/b/by-5tbcoa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="t7wgm3bcf"/><path class="duwkm8_od wm-k"/><path class="re13p-ksd wm-a"/><path class="eyw-z6bdb wm-k"/><path class="by-5tbcoa wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:bookmark-plus-sketch"} {...others} />);
}

export default Component;
