import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/t_g72-b9s.css';
import '../../css/k/kdi-73b5e.css';
import '../../css/v/vahbrmb-p.css';
import '../../css/i/isb-x7b4z.css';
import '../../css/s/s1afeeb0i.css';
import '../../css/t/t24d_rbut.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="t_g72-b9s wm-k"/><path class="kdi-73b5e wm-a"/><path class="vahbrmb-p wm-shadow"/><path class="isb-x7b4z wm-k"/><path class="s1afeeb0i wm-a"/><path class="t24d_rbut wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:code-engrave"} {...others} />);
}

export default Component;
