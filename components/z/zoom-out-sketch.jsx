import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/wnzp-ncyf.css';
import '../../css/x/x7annnbrx.css';
import '../../css/q/qktlr5byx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="wnzp-ncyf"/><path class="wm-k x7annnbrx"/><path class="qktlr5byx wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:zoom-out-sketch"} {...others} />);
}

export default Component;
