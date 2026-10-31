import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l5eak3k2p.css';
import '../../css/p/p_mmy2l2f.css';
import '../../css/a/asxb4xunu.css';
import '../../css/s/sap_tdq8c.css';
import '../../css/v/vjn-glt8x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l5eak3k2p"><path class="p_mmy2l2f wm-shadow"/><path class="asxb4xunu wm-k"/><path class="sap_tdq8c wm-a"/><path class="vjn-glt8x wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:alpana"} {...others} />);
}

export default Component;
