import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/ju4ntchta.css';
import '../../css/o/oqymwdbzd.css';
import '../../css/j/jv_nu-gmm.css';
import '../../css/t/t90us5b1w.css';
import '../../css/y/ymuyu3bni.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ju4ntchta wm-k"/><path class="oqymwdbzd wm-k"/><path class="jv_nu-gmm wm-k"/><path class="t90us5b1w wm-shadow"/><path class="wm-shine ymuyu3bni"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:app-window"} {...others} />);
}

export default Component;
