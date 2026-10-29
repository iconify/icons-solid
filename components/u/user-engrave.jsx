import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/nyo9d_2dy.css';
import '../../css/p/pexkecb2t.css';
import '../../css/x/xvkzbpb0a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="nyo9d_2dy"/><path class="pexkecb2t wm-shadow"/><path class="xvkzbpb0a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:user-engrave"} {...others} />);
}

export default Component;
