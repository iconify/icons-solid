import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xrry15w0o.css';
import '../../css/y/yc1eq-awn.css';
import '../../css/w/wk0dhccfa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="xrry15w0o"/><path class="yc1eq-awn"/><path class="wk0dhccfa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:panel-left-open-linear"} {...others} />);
}

export default Component;
