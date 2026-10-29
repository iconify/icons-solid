import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/m1e1revmv.css';
import '../../css/q/qzn_ctbxq.css';
import '../../css/j/jac47ganm.css';
import '../../css/q/qiqn0dn5q.css';
import '../../css/m/mq-ynobqs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="m1e1revmv"/><path class="qzn_ctbxq wm-k"/><path class="jac47ganm wm-a"/><path class="qiqn0dn5q wm-k"/><path class="mq-ynobqs wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:wallet-cards-sketch"} {...others} />);
}

export default Component;
