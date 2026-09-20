import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/h/htb05oy9r.css';
import '../../css/p/pjswgzlnc.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="htb05oy9r"/><path class="pjswgzlnc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:folder-open"} {...others} />);
}

export default Component;
