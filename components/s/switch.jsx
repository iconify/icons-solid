import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/c/cue1yvi8n.css';
import '../../css/f/ftlh-bb6g.css';
import '../../css/g/gz7_nhb4m.css';

const viewBox = {"width":21,"height":21};
const content = `<g transform="translate(6 3)" class="jtowsomii"><path class="cue1yvi8n"/><circle class="ftlh-bb6g"/><path class="gz7_nhb4m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:switch"} {...others} />);
}

export default Component;
