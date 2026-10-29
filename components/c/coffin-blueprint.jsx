import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/b/bejnddcob.css';
import '../../css/i/i05_0zb4f.css';
import '../../css/n/nip8kwy2i.css';
import '../../css/g/gi61awbnh.css';
import '../../css/t/t2zlwccha.css';
import '../../css/x/xad_znphc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="bejnddcob wm-deco"/><path class="i05_0zb4f wm-deco"/><path class="nip8kwy2i wm-deco"/><path class="gi61awbnh wm-k"/><path class="t2zlwccha wm-a"/><path class="wm-k xad_znphc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:coffin-blueprint"} {...others} />);
}

export default Component;
