import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/e-x2tkb2b.css';
import '../../css/s/seevwwrhh.css';
import '../../css/m/m948spvmd.css';
import '../../css/s/svvk-3k2b.css';
import '../../css/t/t2srnhboy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="e-x2tkb2b wm-k"/><path class="seevwwrhh wm-a"/><path class="m948spvmd wm-shadow"/><path class="svvk-3k2b wm-k"/><path class="t2srnhboy wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:save-engrave"} {...others} />);
}

export default Component;
