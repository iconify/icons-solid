import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/e8sr0bcyc.css';
import '../../css/z/zml1h0q7g.css';
import '../../css/f/fq_nlwb_w.css';
import '../../css/b/b22-7qb1v.css';
import '../../css/k/k3ti3vb9x.css';
import '../../css/u/uvs2-_xye.css';
import '../../css/t/tlh989bna.css';
import '../../css/z/zr35ecbmr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="e8sr0bcyc"/><path class="zml1h0q7g"/><path class="fq_nlwb_w"/><path class="b22-7qb1v"/><path class="k3ti3vb9x"/><path class="uvs2-_xye"/><path class="tlh989bna"/><path class="zr35ecbmr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:file-sliders-line-duotone"} {...others} />);
}

export default Component;
