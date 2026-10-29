import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/d/do224cbtr.css';
import '../../css/p/pwsucbb2c.css';
import '../../css/s/s1c_z7b8c.css';
import '../../css/n/nvbbozbop.css';
import '../../css/q/qcaa1bb_b.css';
import '../../css/s/ss7b7acbl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="do224cbtr wm-deco"/><path class="pwsucbb2c wm-deco"/><path class="s1c_z7b8c wm-k"/><path class="nvbbozbop wm-a"/><path class="qcaa1bb_b wm-k"/><path class="ss7b7acbl wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:list-checks-blueprint"} {...others} />);
}

export default Component;
