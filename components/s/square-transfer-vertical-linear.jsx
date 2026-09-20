import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pw8f5c0fp.css';
import '../../css/p/p4tdawz1x.css';
import '../../css/h/h3eh08byi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="pw8f5c0fp"/><path class="p4tdawz1x"/><path class="h3eh08byi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:square-transfer-vertical-linear"} {...others} />);
}

export default Component;
