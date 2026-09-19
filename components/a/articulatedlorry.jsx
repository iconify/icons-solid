import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k_w2r4b0a.css';
import '../../css/b/bxo_i4aax.css';
import '../../css/x/x5el3e2in.css';
import '../../css/z/zax2x4bad.css';
import '../../css/v/v69tqwb2t.css';
import '../../css/b/btjlh4opu.css';
import '../../css/b/bag52vb4o.css';
import '../../css/f/f734v_b5v.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="k_w2r4b0a"/><path class="bxo_i4aax"/><path class="x5el3e2in"/><path class="zax2x4bad"/><path class="v69tqwb2t"/><path class="btjlh4opu"/><path class="bag52vb4o"/><path class="f734v_b5v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:articulatedlorry"} {...others} />);
}

export default Component;
