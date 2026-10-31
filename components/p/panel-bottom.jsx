import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u1tc2igny.css';
import '../../css/c/c8a2imofx.css';
import '../../css/x/xai3cbccx.css';
import '../../css/g/g0-x4_bhg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="u1tc2igny wm-k"/><path class="c8a2imofx wm-k"/><path class="wm-shadow xai3cbccx"/><path class="g0-x4_bhg wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:panel-bottom"} {...others} />);
}

export default Component;
