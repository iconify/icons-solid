import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zvgrv2b2z.css';
import '../../css/h/hh55kybof.css';
import '../../css/p/pqyt4xb2k.css';
import '../../css/p/pvhtz90ki.css';
import '../../css/u/u2_d9s_qm.css';
import '../../css/f/f11_vneom.css';
import '../../css/t/tyn4sibjm.css';
import '../../css/r/rlt9nybfj.css';
import '../../css/q/qqjvne30s.css';
import '../../css/e/edv8mlend.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-shadow zvgrv2b2z"/><path class="hh55kybof wm-k"/><path class="pqyt4xb2k wm-k"/><path class="pvhtz90ki wm-k"/><path class="u2_d9s_qm wm-k"/><path class="f11_vneom wm-k"/><path class="tyn4sibjm wm-shine"/><path class="rlt9nybfj wm-a"/><path class="qqjvne30s wm-a"/><path class="edv8mlend wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:search-x"} {...others} />);
}

export default Component;
