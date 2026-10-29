import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/y/ypw0k2buq.css';
import '../../css/n/n143gwbbn.css';
import '../../css/k/kdou3obxe.css';
import '../../css/d/dto_k4bxp.css';
import '../../css/n/nfutsrbtc.css';
import '../../css/i/iz1poibor.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="wm-k ypw0k2buq"/><path class="n143gwbbn wm-a"/><path class="kdou3obxe wm-shadow"/><path class="dto_k4bxp wm-k"/><path class="nfutsrbtc wm-k"/><path class="iz1poibor wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:dholak-engrave"} {...others} />);
}

export default Component;
