import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wsuk3cu1j.css';
import '../../css/d/d27vribrr.css';
import '../../css/l/l4zjyebel.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="wsuk3cu1j"/><path class="d27vribrr"/><path clip-rule="evenodd" class="l4zjyebel"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:rugby-bold"} {...others} />);
}

export default Component;
