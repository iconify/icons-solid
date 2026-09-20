import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n2yjw-bmg.css';
import '../../css/d/d6fy9zwjs.css';
import '../../css/n/n51onubkc.css';
import '../../css/u/u4e0avb0z.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="n2yjw-bmg"/><path class="d6fy9zwjs"/><path class="n51onubkc"/><path class="u4e0avb0z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:business-handshake"} {...others} />);
}

export default Component;
