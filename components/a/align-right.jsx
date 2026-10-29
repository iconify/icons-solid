import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i8fetbcpc.css';
import '../../css/g/gdtsncyrw.css';
import '../../css/v/vyxvoq2yt.css';
import '../../css/o/o5j2bgb5v.css';
import '../../css/f/f6jtoebkx.css';
import '../../css/b/b2dxt8zad.css';
import '../../css/p/pu_xdcb4k.css';
import '../../css/j/j_uwvqm3g.css';
import '../../css/c/ct2dstb3h.css';
import '../../css/k/kcp_mdbfe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="i8fetbcpc wm-shadow"/><path class="gdtsncyrw wm-shadow"/><path class="vyxvoq2yt"/><path class="o5j2bgb5v"/><path class="f6jtoebkx"/><path class="b2dxt8zad"/><path class="pu_xdcb4k"/><path class="j_uwvqm3g wm-shine"/><path class="ct2dstb3h wm-shine"/><path class="kcp_mdbfe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:align-right"} {...others} />);
}

export default Component;
