import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/uyhjy_qbv.css';
import '../../css/l/lkpx07bzf.css';
import '../../css/u/uq-a8tbkj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="uyhjy_qbv"/><path class="lkpx07bzf wm-k"/><path class="uq-a8tbkj wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:vault-sketch"} {...others} />);
}

export default Component;
