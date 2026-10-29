import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/qmvqxnbsf.css';
import '../../css/y/ywltx_bxb.css';
import '../../css/d/d5s1xp9pm.css';
import '../../css/x/xnopv6zow.css';
import '../../css/r/rd2rs6bjz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="qmvqxnbsf"/><path class="wm-k ywltx_bxb"/><path class="d5s1xp9pm wm-a"/><path class="wm-k xnopv6zow"/><path class="rd2rs6bjz wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:pen-tool-sketch"} {...others} />);
}

export default Component;
