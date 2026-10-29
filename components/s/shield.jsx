import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nawog-beq.css';
import '../../css/i/i7v1imuiv.css';
import '../../css/h/hgm0feqnq.css';
import '../../css/s/sx40hko8u.css';
import '../../css/t/t1ja_u-qh.css';
import '../../css/b/bjzkxgy_o.css';
import '../../css/p/pmi3eqbzt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="nawog-beq wm-k"/><path class="i7v1imuiv wm-k"/><path class="hgm0feqnq wm-k"/><path class="sx40hko8u wm-shine"/><path class="t1ja_u-qh wm-k"/><path class="bjzkxgy_o wm-k"/><path class="pmi3eqbzt wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:shield"} {...others} />);
}

export default Component;
