import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/c2oa-ccqe.css';
import '../../css/x/x6r0f87qf.css';
import '../../css/q/qtas-ab4z.css';
import '../../css/x/xa2hfrbrx.css';
import '../../css/w/wbjyenbnm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="c2oa-ccqe wm-k"/><path class="wm-a x6r0f87qf"/><path class="qtas-ab4z wm-shadow"/><path class="wm-k xa2hfrbrx"/><path class="wbjyenbnm wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:rangoli-pattern-engrave"} {...others} />);
}

export default Component;
