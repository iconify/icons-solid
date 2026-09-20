import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/x/xq-u_8bzg.css';
import '../../css/t/tdky_qbva.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="xq-u_8bzg"/><circle class="tdky_qbva"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:filter-single"} {...others} />);
}

export default Component;
