import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nf3mfhn_r.css';
import '../../css/e/ext8h4h2h.css';
import '../../css/c/cb6hc8epa.css';
import '../../css/w/wfenyfbjn.css';
import '../../css/u/udrmqh2ka.css';
import '../../css/t/t61zn3itg.css';
import '../../css/c/cq-zahqxp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="nf3mfhn_r wm-k"/><path class="ext8h4h2h wm-k"/><path class="cb6hc8epa wm-k"/><path class="wfenyfbjn wm-shine"/><path class="udrmqh2ka wm-k"/><path class="t61zn3itg wm-k"/><path class="cq-zahqxp wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:filter"} {...others} />);
}

export default Component;
