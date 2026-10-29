import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/jrl639bzb.css';
import '../../css/c/cqn-6lboc.css';
import '../../css/g/g_wmz4e_j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="jrl639bzb"/><path class="cqn-6lboc wm-k"/><path class="g_wmz4e_j wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:power-sketch"} {...others} />);
}

export default Component;
