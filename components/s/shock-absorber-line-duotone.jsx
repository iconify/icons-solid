import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/a5aa8opar.css';
import '../../css/t/t_aznob1v.css';
import '../../css/y/y94091a_r.css';
import '../../css/i/i4zzprb-l.css';
import '../../css/u/uxgpkm7fp.css';
import '../../css/u/unnk4bcsi.css';
import '../../css/r/rxt3g_bgx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="a5aa8opar"/><path class="t_aznob1v"/><path class="y94091a_r"/><path class="i4zzprb-l"/><path class="uxgpkm7fp"/><path class="unnk4bcsi"/><path class="rxt3g_bgx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:shock-absorber-line-duotone"} {...others} />);
}

export default Component;
