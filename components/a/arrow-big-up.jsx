import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xqk982fuf.css';
import '../../css/d/dq5w_efsc.css';
import '../../css/x/xaevt7b6g.css';
import '../../css/e/e11_0-b5v.css';
import '../../css/e/e-wc6ob9i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-k xqk982fuf"/><path class="dq5w_efsc wm-k"/><path class="wm-k xaevt7b6g"/><path class="e11_0-b5v wm-k"/><path class="e-wc6ob9i wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:arrow-big-up"} {...others} />);
}

export default Component;
