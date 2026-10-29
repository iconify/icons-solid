import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/vsnu5gbhp.css';
import '../../css/j/jlb-a5b-w.css';
import '../../css/x/xtrag_b9w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="vsnu5gbhp"/><path class="jlb-a5b-w wm-k"/><path class="wm-a xtrag_b9w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:sun-sketch"} {...others} />);
}

export default Component;
