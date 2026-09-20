import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qrv48pbgw.css';
import '../../css/k/kv3pi7b2z.css';
import '../../css/h/hiflofblr.css';
import '../../css/l/lmmiwvbbm.css';
import '../../css/x/xwcqrabbg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="qrv48pbgw"/><path clip-rule="evenodd" class="kv3pi7b2z"/><path class="hiflofblr"/><path class="lmmiwvbbm"/><path class="xwcqrabbg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:flashlight-on-outline"} {...others} />);
}

export default Component;
