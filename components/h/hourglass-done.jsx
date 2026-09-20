import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ohmownbqo.css';
import '../../css/y/yd2kckidj.css';
import '../../css/o/ot5rp7bhm.css';
import '../../css/g/ghjngp9-w.css';
import '../../css/o/ohrtlxb7j.css';
import '../../css/i/id1azso-k.css';
import '../../css/z/z5ceacb0p.css';
import '../../css/m/mce_fp1xy.css';
import '../../css/c/cg_fxcb2c.css';
import '../../css/h/h3u8tkbpv.css';
import '../../css/n/n8hlb_bsk.css';
import '../../css/q/qmfx3q47q.css';
import '../../css/d/dl39u6bmr.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ohmownbqo"/><path class="yd2kckidj"/><path class="ot5rp7bhm"/><path class="ghjngp9-w"/><path class="ohrtlxb7j"/><path class="id1azso-k"/><path class="z5ceacb0p"/><path class="mce_fp1xy"/><path class="cg_fxcb2c"/><path class="h3u8tkbpv"/><path class="n8hlb_bsk"/><path class="qmfx3q47q"/><path class="dl39u6bmr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:hourglass-done"} {...others} />);
}

export default Component;
