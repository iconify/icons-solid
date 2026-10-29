import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/ntjsxb_ty.css';
import '../../css/j/jjga-eber.css';
import '../../css/t/t048yihdc.css';
import '../../css/l/lap-h8eft.css';
import '../../css/f/fzlatcc_e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ntjsxb_ty wm-k"/><path class="jjga-eber wm-shadow"/><path class="t048yihdc wm-k"/><path class="lap-h8eft wm-k"/><path class="fzlatcc_e wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:door-open-engrave"} {...others} />);
}

export default Component;
