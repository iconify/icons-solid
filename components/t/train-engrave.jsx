import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/r7uu9fcak.css';
import '../../css/p/pf64yv0wt.css';
import '../../css/r/r8i9bcc2r.css';
import '../../css/l/ly23pmblx.css';
import '../../css/g/gt402wbqt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="r7uu9fcak wm-k"/><path class="pf64yv0wt wm-a"/><path class="r8i9bcc2r wm-shadow"/><path class="ly23pmblx wm-k"/><path class="gt402wbqt wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:train-engrave"} {...others} />);
}

export default Component;
