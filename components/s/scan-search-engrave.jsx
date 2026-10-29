import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/knwu_bb7f.css';
import '../../css/u/ub4cw5b7g.css';
import '../../css/u/ue6igjb8l.css';
import '../../css/l/l9lv5_bcf.css';
import '../../css/e/epabx8bdv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="knwu_bb7f wm-k"/><path class="ub4cw5b7g wm-a"/><path class="ue6igjb8l wm-shadow"/><path class="l9lv5_bcf wm-k"/><path class="epabx8bdv wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:scan-search-engrave"} {...others} />);
}

export default Component;
