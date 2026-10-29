import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/knwu_bb7f.css';
import '../../css/b/bb47etbbq.css';
import '../../css/p/px8mdm7ve.css';
import '../../css/l/l9lv5_bcf.css';
import '../../css/m/mvlqq2b6g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="knwu_bb7f wm-k"/><path class="bb47etbbq wm-a"/><path class="px8mdm7ve wm-shadow"/><path class="l9lv5_bcf wm-k"/><path class="mvlqq2b6g wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:scan-engrave"} {...others} />);
}

export default Component;
