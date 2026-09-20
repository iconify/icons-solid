import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/s19aowben.css';
import '../../css/m/mvkasiemb.css';
import '../../css/z/zc6gsob1e.css';
import '../../css/y/y-maskbat.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="s19aowben"/><path class="mvkasiemb"/><path class="zc6gsob1e"/><path class="y-maskbat"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:playlist-minimalistic-line-duotone"} {...others} />);
}

export default Component;
