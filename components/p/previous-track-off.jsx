import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/g/g9wje9pgu.css';
import '../../css/t/txd2vrbwz.css';
import '../../css/i/i7w4p8bfa.css';
import '../../css/u/u3d82cckd.css';
import '../../css/a/afv1cj3-v.css';
import '../../css/c/cpcm_cbdw.css';
import '../../css/q/qbxn-wb6f.css';
import '../../css/d/d030jw_4r.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><g class="xyjtgccot"><path class="g9wje9pgu"/><path clip-rule="evenodd" class="txd2vrbwz"/><path class="i7w4p8bfa"/><path clip-rule="evenodd" class="u3d82cckd"/><path clip-rule="evenodd" class="afv1cj3-v"/></g><path clip-rule="evenodd" class="cpcm_cbdw"/><path clip-rule="evenodd" class="qbxn-wb6f"/><path clip-rule="evenodd" class="d030jw_4r"/><path class="mo5netbri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:previous-track-off"} {...others} />);
}

export default Component;
