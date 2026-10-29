import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/xjo_ygssv.css';
import '../../css/y/yxfrlacge.css';
import '../../css/p/pccmthnzk.css';
import '../../css/r/ri1d2xbar.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="wm-k xjo_ygssv"/><path class="wm-a yxfrlacge"/><path class="pccmthnzk wm-k"/><path class="ri1d2xbar wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:diya-sketch"} {...others} />);
}

export default Component;
