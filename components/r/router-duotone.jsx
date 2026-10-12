import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/exxofc7bf.css';
import '../../css/d/du9_k7b_y.css';
import '../../css/v/vuzz59b6v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="exxofc7bf"/><path class="du9_k7b_y"/><path class="vuzz59b6v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:router-duotone"} {...others} />);
}

export default Component;
