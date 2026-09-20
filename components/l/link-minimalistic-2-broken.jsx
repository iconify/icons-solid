import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/h8gm2tbay.css';
import '../../css/h/hsch2jdsj.css';
import '../../css/s/svy65vbai.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="h8gm2tbay"/><path class="hsch2jdsj"/><path class="svy65vbai"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:link-minimalistic-2-broken"} {...others} />);
}

export default Component;
