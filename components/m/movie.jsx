import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t_sdfzb6s.css';
import '../../css/u/um99oyb4h.css';
import '../../css/l/l96isplwe.css';
import '../../css/z/zl-8gvbug.css';
import '../../css/y/y7bnt1bxk.css';
import '../../css/f/fagjssbxx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect class="t_sdfzb6s"/><path class="um99oyb4h"/><rect class="l96isplwe"/><path class="zl-8gvbug"/><rect transform="rotate(-15 2.43 6.8)" class="y7bnt1bxk"/><path class="fagjssbxx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:movie"} {...others} />);
}

export default Component;
