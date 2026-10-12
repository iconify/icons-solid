import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z85fdgb9r.css';
import '../../css/s/s1a2eew1e.css';
import '../../css/s/s6te4phsj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="z85fdgb9r"/><path class="s1a2eew1e"/><path class="s6te4phsj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:square-m-duotone"} {...others} />);
}

export default Component;
