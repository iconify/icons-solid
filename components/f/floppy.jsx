import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/c/cv7of7u4f.css';
import '../../css/g/glug8n--n.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="cv7of7u4f"/><path class="glug8n--n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:floppy"} {...others} />);
}

export default Component;
