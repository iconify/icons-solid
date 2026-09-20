import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jwzsvclwx.css';
import '../../css/z/zi3_1_bso.css';
import '../../css/u/urx5hfmpf.css';
import '../../css/b/blt_tmupa.css';
import '../../css/i/i-tewzont.css';
import '../../css/q/qbstsz2dr.css';
import '../../css/c/c5_aghbko.css';
import '../../css/k/kql54hb2o.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="jwzsvclwx"/><path class="zi3_1_bso"/><path class="urx5hfmpf"/><path class="blt_tmupa"/><path class="i-tewzont"/><path class="qbstsz2dr"/><path class="c5_aghbko"/><path class="kql54hb2o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:microscope-observation-sciene"} {...others} />);
}

export default Component;
