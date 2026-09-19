import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qtp68xb2t.css';
import '../../css/i/iyktak7xc.css';
import '../../css/q/qx-yz_apy.css';
import '../../css/n/n_8i1fbwq.css';
import '../../css/y/y8sr8ccuc.css';
import '../../css/j/jek_v2g_q.css';
import '../../css/y/yq6n7ybra.css';
import '../../css/l/lqoki3bvs.css';
import '../../css/k/kmsg-abyy.css';
import '../../css/k/kk1e7tb-z.css';
import '../../css/x/xi0ty85fn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qtp68xb2t"/><path class="iyktak7xc"/><path class="qx-yz_apy"/><path class="n_8i1fbwq"/><path class="y8sr8ccuc"/><path class="jek_v2g_q"/><path class="yq6n7ybra"/><path class="lqoki3bvs"/><path class="kmsg-abyy"/><path class="kk1e7tb-z"/><path class="xi0ty85fn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-basket"} {...others} />);
}

export default Component;
