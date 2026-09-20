import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xvjk-cbox.css';
import '../../css/i/ijmauiszs.css';
import '../../css/m/mdco-nbti.css';
import '../../css/z/zwiw2-bkv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="xvjk-cbox"/><path class="ijmauiszs"/><path class="mdco-nbti"/><path class="zwiw2-bkv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:streets-map-point-linear"} {...others} />);
}

export default Component;
