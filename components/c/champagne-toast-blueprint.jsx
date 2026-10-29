import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/q/qnrm6sbqf.css';
import '../../css/j/j0e2qz-ae.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/b/bg8sxlbho.css';
import '../../css/h/hnxobrbrn.css';
import '../../css/o/ohlg0wbaj.css';
import '../../css/c/cwrahxb1j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="qnrm6sbqf wm-deco"/><path class="j0e2qz-ae wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="bg8sxlbho wm-k"/><path class="hnxobrbrn wm-a"/><path class="ohlg0wbaj wm-s"/><path class="cwrahxb1j wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:champagne-toast-blueprint"} {...others} />);
}

export default Component;
