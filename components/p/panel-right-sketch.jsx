import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/qc670fb8v.css';
import '../../css/h/hausojmrr.css';
import '../../css/c/cdb9mdikz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="qc670fb8v wm-a"/><path class="hausojmrr wm-k"/><path class="cdb9mdikz wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:panel-right-sketch"} {...others} />);
}

export default Component;
