import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qz-9-chfl.css';
import '../../css/m/m8e1k4zpf.css';
import '../../css/f/fka1u1brx.css';
import '../../css/p/pgkufgb7j.css';
import '../../css/m/m8ix_8bdx.css';
import '../../css/l/lpt670bpg.css';
import '../../css/a/aywrjybps.css';
import '../../css/p/pp_j2yb2a.css';
import '../../css/f/fgjpkpu_y.css';
import '../../css/x/xrbtmsbwf.css';
import '../../css/e/ezifzdb2k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qz-9-chfl"/><path class="m8e1k4zpf"/><path class="fka1u1brx"/><path class="pgkufgb7j"/><path class="m8ix_8bdx"/><path class="lpt670bpg"/><path class="aywrjybps"/><path class="pp_j2yb2a"/><path class="fgjpkpu_y"/><path class="xrbtmsbwf"/><path class="ezifzdb2k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:hospital-building"} {...others} />);
}

export default Component;
