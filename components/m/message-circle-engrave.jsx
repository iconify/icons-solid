import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/txn_7sbfw.css';
import '../../css/x/x3-9faclu.css';
import '../../css/w/wxwl6_qzl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="txn_7sbfw"/><path class="wm-shadow x3-9faclu"/><path class="wxwl6_qzl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:message-circle-engrave"} {...others} />);
}

export default Component;
