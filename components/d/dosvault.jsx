import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jn4dgv0_o.css';
import '../../css/w/w8x7b_bma.css';
import '../../css/h/hsjzegngl.css';
import '../../css/b/bf1efq54z.css';
import '../../css/j/jv86iz3rk.css';
import '../../css/z/zi8b400ki.css';
import '../../css/t/t30wtbc_f.css';
import '../../css/m/mtqvo1bko.css';
import '../../css/y/yw8xncb6h.css';
import '../../css/m/mj4ung70e.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="jn4dgv0_o"/><path class="w8x7b_bma"/><path class="hsjzegngl"/><path class="bf1efq54z"/><circle class="jv86iz3rk"/><path class="zi8b400ki"/><path class="t30wtbc_f"/><path class="mtqvo1bko"/><path class="yw8xncb6h"/><circle class="mj4ung70e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:dosvault"} {...others} />);
}

export default Component;
