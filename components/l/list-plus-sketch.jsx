import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/o3den9b1v.css';
import '../../css/n/ntbzkabub.css';
import '../../css/x/xxcniyxuf.css';
import '../../css/j/j0bzfeots.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="o3den9b1v wm-k"/><path class="ntbzkabub wm-s"/><path class="wm-k xxcniyxuf"/><path class="j0bzfeots wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:list-plus-sketch"} {...others} />);
}

export default Component;
