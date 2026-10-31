import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/c/cgkc6_b-r.css';
import '../../css/o/osas6gbwq.css';
import '../../css/t/thg5f_b0u.css';
import '../../css/d/dkm22fuvr.css';
import '../../css/n/nhf-r78rj.css';
import '../../css/g/gsm21sbrt.css';
import '../../css/d/dwvo89bpm.css';
import '../../css/u/ud2k0ub2n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="cgkc6_b-r"/><path class="osas6gbwq"/><path class="thg5f_b0u"/><path class="dkm22fuvr wm-shine"/><path class="nhf-r78rj wm-k"/><path class="gsm21sbrt wm-a"/><path class="dwvo89bpm"/><path class="ud2k0ub2n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:taxi"} {...others} />);
}

export default Component;
