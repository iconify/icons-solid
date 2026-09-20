import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y7l33kb2o.css';
import '../../css/h/h2juf0bjn.css';
import '../../css/t/t8uw1ebry.css';
import '../../css/r/rbfwj0bmz.css';
import '../../css/r/r-u3-wbfw.css';
import '../../css/l/lh-l37bgy.css';
import '../../css/q/qj114vokl.css';
import '../../css/s/s4630vbeo.css';
import '../../css/l/ldgl5pb2y.css';
import '../../css/z/z23pnb4ab.css';
import '../../css/d/dcn3ajbpp.css';
import '../../css/x/xw9u-isbm.css';
import '../../css/i/isc7_hume.css';
import '../../css/v/vc3xd7bcp.css';
import '../../css/r/r2o9zjbbm.css';
import '../../css/p/ps-w33_jx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="y7l33kb2o"/><path class="h2juf0bjn"/><path class="t8uw1ebry"/><path class="rbfwj0bmz"/><path class="r-u3-wbfw"/><path class="lh-l37bgy"/><path class="qj114vokl"/><path class="s4630vbeo"/><path class="ldgl5pb2y"/><path class="z23pnb4ab"/><path class="dcn3ajbpp"/><path class="xw9u-isbm"/><path class="isc7_hume"/><path class="vc3xd7bcp"/><path class="r2o9zjbbm"/><path class="ps-w33_jx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:woman-technologist-light-skin-tone"} {...others} />);
}

export default Component;
