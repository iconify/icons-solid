import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/ixv74mb6y.css';
import '../../css/c/cltoiebep.css';
import '../../css/t/t11v-vb0a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ixv74mb6y wm-k"/><path class="cltoiebep wm-k"/><path class="t11v-vb0a wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:user-sketch"} {...others} />);
}

export default Component;
