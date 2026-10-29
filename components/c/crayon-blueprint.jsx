import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/a/aott4gbey.css';
import '../../css/q/qc9l8cbpm.css';
import '../../css/w/wmd_hta0n.css';
import '../../css/p/psuc-s3be.css';
import '../../css/w/wlb0b7siw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="aott4gbey wm-deco"/><path class="qc9l8cbpm wm-deco"/><path class="wm-deco wmd_hta0n"/><path class="psuc-s3be wm-k"/><path class="wlb0b7siw wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:crayon-blueprint"} {...others} />);
}

export default Component;
