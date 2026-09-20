import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vb8us5ilq.css';
import '../../css/d/doqa-cbwv.css';
import '../../css/x/xeoh7lbiu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="vb8us5ilq"/><path class="doqa-cbwv"/><path class="xeoh7lbiu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wineglass-triangle-line-duotone"} {...others} />);
}

export default Component;
