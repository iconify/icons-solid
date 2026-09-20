import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i0yalr5ir.css';
import '../../css/m/mptfj1y7e.css';
import '../../css/h/hez7u3p3a.css';
import '../../css/m/mnn8h46ib.css';
import '../../css/a/a8soxjbrt.css';
import '../../css/g/gq21q1b5h.css';
import '../../css/f/fze_nvbrw.css';
import '../../css/r/r-q9_2bxy.css';
import '../../css/q/qlt61hbsr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="i0yalr5ir"/><path class="mptfj1y7e"/><path class="hez7u3p3a"/><path class="mnn8h46ib"/><path clip-rule="evenodd" class="a8soxjbrt"/><path clip-rule="evenodd" class="gq21q1b5h"/><path clip-rule="evenodd" class="fze_nvbrw"/><path class="r-q9_2bxy"/><path clip-rule="evenodd" class="qlt61hbsr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:dices-duo"} {...others} />);
}

export default Component;
