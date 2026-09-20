import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/s19aowben.css';
import '../../css/g/gq055--ga.css';
import '../../css/m/mvkasiemb.css';
import '../../css/l/l4vllvb7o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="s19aowben"/><path class="gq055--ga"/><path class="mvkasiemb"/><path class="l4vllvb7o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:list-check-minimalistic-line-duotone"} {...others} />);
}

export default Component;
