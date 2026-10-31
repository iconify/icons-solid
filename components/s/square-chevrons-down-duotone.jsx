import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wufcgxb8s.css';
import '../../css/k/kw5asmg6l.css';
import '../../css/s/s6te4phsj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wufcgxb8s"/><path class="kw5asmg6l"/><path class="s6te4phsj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:square-chevrons-down-duotone"} {...others} />);
}

export default Component;
