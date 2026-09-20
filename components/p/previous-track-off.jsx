import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cpcm_cbdw.css';
import '../../css/q/qbxn-wb6f.css';
import '../../css/d/d030jw_4r.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="cpcm_cbdw"/><path clip-rule="evenodd" class="qbxn-wb6f"/><path clip-rule="evenodd" class="d030jw_4r"/><path class="mo5netbri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:previous-track-off"} {...others} />);
}

export default Component;
