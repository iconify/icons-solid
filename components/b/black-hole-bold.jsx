import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rps61pbpv.css';
import '../../css/c/cb2j0bb2i.css';
import '../../css/l/l6bmbjmuz.css';
import '../../css/h/ht7hytb4d.css';
import '../../css/j/jtviji7ga.css';
import '../../css/g/gtq90ib3d.css';
import '../../css/y/y9phombht.css';
import '../../css/i/i3u007bce.css';
import '../../css/r/rc1zijluy.css';
import '../../css/a/a5vu_dbgf.css';
import '../../css/q/qkumv4beq.css';
import '../../css/q/qg9f4wb1t.css';
import '../../css/l/l622xfbxw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rps61pbpv"/><path class="cb2j0bb2i"/><path class="l6bmbjmuz"/><path class="ht7hytb4d"/><path class="jtviji7ga"/><path class="gtq90ib3d"/><path class="y9phombht"/><path class="i3u007bce"/><path class="rc1zijluy"/><path class="a5vu_dbgf"/><path class="qkumv4beq"/><path class="qg9f4wb1t"/><path class="l622xfbxw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:black-hole-bold"} {...others} />);
}

export default Component;
