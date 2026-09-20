import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/s19aowben.css';
import '../../css/m/mvkasiemb.css';
import '../../css/y/y8xtn591b.css';
import '../../css/b/b4_g5c43k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="s19aowben"/><path class="mvkasiemb"/><path class="y8xtn591b"/><path class="b4_g5c43k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:list-heart-minimalistic-line-duotone"} {...others} />);
}

export default Component;
