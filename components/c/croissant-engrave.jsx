import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/ue5yfeb0t.css';
import '../../css/q/qda327bnf.css';
import '../../css/o/ot7ug_ubs.css';
import '../../css/e/e_jnf7h6d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ue5yfeb0t wm-k"/><path class="qda327bnf wm-shadow"/><path class="ot7ug_ubs wm-k"/><path class="e_jnf7h6d wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:croissant-engrave"} {...others} />);
}

export default Component;
