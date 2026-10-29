import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cd2qxdo3v.css';
import '../../css/k/kc9hx64ps.css';
import '../../css/n/nzogm-yjk.css';
import '../../css/q/qiafq3bne.css';
import '../../css/o/obf36nbsy.css';
import '../../css/g/gb58o5b0f.css';
import '../../css/q/qrn9jyb0f.css';
import '../../css/f/f_pt5u_ed.css';
import '../../css/c/c9_mtxbzu.css';
import '../../css/o/ox6-kqboa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="cd2qxdo3v wm-shadow"/><path class="kc9hx64ps wm-shadow"/><path class="nzogm-yjk"/><path class="qiafq3bne"/><path class="obf36nbsy"/><path class="gb58o5b0f"/><path class="qrn9jyb0f wm-shine"/><path class="f_pt5u_ed wm-shine"/><path class="c9_mtxbzu"/><path class="ox6-kqboa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:avatar-owl"} {...others} />);
}

export default Component;
