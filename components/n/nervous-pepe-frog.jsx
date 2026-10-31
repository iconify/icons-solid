import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oqm0uxbpz.css';
import '../../css/d/dinlg7bsk.css';
import '../../css/z/zuy2_3teh.css';
import '../../css/b/bmqtf9bni.css';
import '../../css/a/ahttlcjbx.css';
import '../../css/e/eom42zb_z.css';
import '../../css/q/qn_sxrbwd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="oqm0uxbpz"/><path class="dinlg7bsk"/><path class="zuy2_3teh"/><path class="bmqtf9bni"/><path class="ahttlcjbx"/><path class="eom42zb_z"/><path clip-rule="evenodd" class="qn_sxrbwd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-memes:nervous-pepe-frog"} {...others} />);
}

export default Component;
