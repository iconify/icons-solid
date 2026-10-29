import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/kiyxn3vnf.css';
import '../../css/e/eq3alpblw.css';
import '../../css/w/wfiwow-re.css';
import '../../css/h/hjhq2hbzp.css';
import '../../css/r/r5t68nbuw.css';
import '../../css/q/q2-38ccpw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="kiyxn3vnf"/><path class="eq3alpblw wm-a"/><path class="wfiwow-re wm-k"/><path class="hjhq2hbzp wm-k"/><path class="r5t68nbuw wm-a"/><path class="q2-38ccpw wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:crystal-ball-sketch"} {...others} />);
}

export default Component;
