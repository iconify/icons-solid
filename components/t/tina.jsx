import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p4dltdb0b.css';
import '../../css/j/jnz9frblc.css';
import '../../css/u/uanpnlb-p.css';

const viewBox = {"width":448,"height":621};
const content = `<g class="p4dltdb0b"><path class="jnz9frblc"/><path class="uanpnlb-p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:tina"} {...others} />);
}

export default Component;
