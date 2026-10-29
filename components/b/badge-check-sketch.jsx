import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/btaeqlyar.css';
import '../../css/v/vtc093b0f.css';
import '../../css/o/o-4nchs_d.css';
import '../../css/e/e_w_3-pqg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="btaeqlyar"/><path class="vtc093b0f wm-a"/><path class="o-4nchs_d wm-k"/><path class="e_w_3-pqg wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:badge-check-sketch"} {...others} />);
}

export default Component;
