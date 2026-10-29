import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/lmiso_bzd.css';
import '../../css/x/xolfzwbae.css';
import '../../css/a/a9objzbor.css';
import '../../css/q/qnns3cbcc.css';
import '../../css/n/nq91dpkwm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="lmiso_bzd wm-k"/><path class="wm-a xolfzwbae"/><path class="a9objzbor wm-shadow"/><path class="qnns3cbcc wm-k"/><path class="nq91dpkwm wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:wrap-text-engrave"} {...others} />);
}

export default Component;
