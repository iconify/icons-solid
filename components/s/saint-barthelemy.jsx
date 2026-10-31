import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z2rvs2tic.css';
import '../../css/y/y89ozdbss.css';
import '../../css/s/sd2pc_bri.css';
import '../../css/m/msh874ycp.css';
import '../../css/j/j34pws1up.css';
import '../../css/h/he1t70yqp.css';
import '../../css/k/kcim4trjq.css';
import '../../css/w/wpi0dlbfm.css';
import '../../css/r/rzm10vjyv.css';
import '../../css/o/om1me1m-h.css';
import '../../css/z/zjh1l-56v.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="z2rvs2tic"/><path class="y89ozdbss"/><path class="sd2pc_bri"/><path class="msh874ycp"/><path class="j34pws1up"/><path class="he1t70yqp"/><path class="kcim4trjq"/><path class="wpi0dlbfm"/><path class="rzm10vjyv"/><path class="om1me1m-h"/><path class="zjh1l-56v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:saint-barthelemy"} {...others} />);
}

export default Component;
