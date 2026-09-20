import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/fg2liobao.css';
import '../../css/d/d0ygbxurg.css';
import '../../css/k/k8xp4x4he.css';
import '../../css/i/irzxfpvcc.css';
import '../../css/g/gdeocxngl.css';
import '../../css/u/uc4n94bsq.css';
import '../../css/d/dwp-m7jgx.css';
import '../../css/i/ikcp8fb2i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="fg2liobao"/><path class="d0ygbxurg"/><path class="k8xp4x4he"/><path class="irzxfpvcc"/><path class="gdeocxngl"/><path class="uc4n94bsq"/><path class="dwp-m7jgx"/><path class="ikcp8fb2i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:server-square-broken"} {...others} />);
}

export default Component;
