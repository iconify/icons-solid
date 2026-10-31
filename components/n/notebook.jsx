import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pti8-xvda.css';
import '../../css/w/wx7peybmh.css';
import '../../css/a/af193v-ql.css';
import '../../css/h/h3nz7bc6q.css';
import '../../css/c/c8ni2jtjb.css';
import '../../css/y/y6p2lkr5x.css';
import '../../css/i/izzhls29h.css';
import '../../css/e/evauqxbpe.css';
import '../../css/q/qf-p5ybzi.css';
import '../../css/c/crcyoibbp.css';
import '../../css/f/fztiv4z2v.css';
import '../../css/t/tgoi16bvp.css';
import '../../css/y/yo--89bxr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="pti8-xvda wm-shadow"/><path class="wm-k wx7peybmh"/><path class="af193v-ql wm-k"/><path class="h3nz7bc6q wm-k"/><path class="c8ni2jtjb wm-k"/><path class="wm-k y6p2lkr5x"/><path class="izzhls29h wm-shine"/><path class="evauqxbpe wm-a"/><path class="qf-p5ybzi wm-a"/><path class="crcyoibbp wm-a"/><path class="fztiv4z2v wm-a"/><path class="tgoi16bvp wm-a"/><path class="wm-a yo--89bxr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-luxe:notebook"} {...others} />);
}

export default Component;
