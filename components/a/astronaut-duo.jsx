import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dukzfrx0n.css';
import '../../css/y/y135zxe_y.css';
import '../../css/i/iz1t0rn3t.css';
import '../../css/p/pm6a8ubbw.css';
import '../../css/i/ipmx31bjd.css';
import '../../css/k/kbq7aqb3a.css';
import '../../css/o/o6suzmbxw.css';
import '../../css/l/li3lkxboo.css';
import '../../css/v/vv_jzcb0e.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="dukzfrx0n"/><path class="y135zxe_y"/><path class="iz1t0rn3t"/><path class="pm6a8ubbw"/><path clip-rule="evenodd" class="ipmx31bjd"/><path class="kbq7aqb3a"/><path class="o6suzmbxw"/><path class="li3lkxboo"/><path clip-rule="evenodd" class="vv_jzcb0e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:astronaut-duo"} {...others} />);
}

export default Component;
