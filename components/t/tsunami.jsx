import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nj_bjbbzz.css';
import '../../css/q/q6z_ngbhj.css';
import '../../css/o/o57fo9bqu.css';
import '../../css/z/z04drlb1l.css';
import '../../css/k/kbyccgbdg.css';
import '../../css/h/h22dv30tg.css';
import '../../css/j/jk8vg9_ca.css';
import '../../css/j/jdcr3_b_r.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="nj_bjbbzz"/><path class="q6z_ngbhj"/><path class="o57fo9bqu"/><g class="z04drlb1l"><path class="kbyccgbdg"/><path class="h22dv30tg"/><path class="jk8vg9_ca"/><path class="jdcr3_b_r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:tsunami"} {...others} />);
}

export default Component;
