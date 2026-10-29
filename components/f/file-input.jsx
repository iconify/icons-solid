import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/h/hvmviuyll.css';
import '../../css/s/shudzxm2z.css';
import '../../css/f/fcp-o4bpl.css';
import '../../css/c/cih9v5yez.css';
import '../../css/k/k92nglwlt.css';
import '../../css/s/sjgcrcdjv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="hvmviuyll wm-shadow"/><path class="shudzxm2z"/><path class="fcp-o4bpl"/><path class="cih9v5yez"/><path class="k92nglwlt wm-shine"/><path class="sjgcrcdjv wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:file-input"} {...others} />);
}

export default Component;
