import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vxfy-ub7z.css';
import '../../css/s/snmgl2d2p.css';
import '../../css/c/cbfde7llg.css';
import '../../css/f/fb7tibubx.css';
import '../../css/m/mmkbl0bko.css';
import '../../css/i/i4fyhqb0i.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/o/oz-krabfm.css';
import '../../css/f/f1qhdqs6k.css';
import '../../css/w/w9un5bbbq.css';
import '../../css/q/qq-hfh-4y.css';
import '../../css/g/gdy5415jd.css';
import '../../css/x/x8-2uo2xi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="vxfy-ub7z"/><path class="snmgl2d2p"/><path class="cbfde7llg"/><path class="fb7tibubx"/><path class="mmkbl0bko"/><path clip-rule="evenodd" class="i4fyhqb0i"/><g class="mc2zb0bvp"><path class="oz-krabfm"/><path class="f1qhdqs6k"/><path class="w9un5bbbq"/><path class="qq-hfh-4y"/><path class="gdy5415jd"/><path class="x8-2uo2xi"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:video-frame-replace-bold-duotone"} {...others} />);
}

export default Component;
