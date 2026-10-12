import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sk-2_lbxb.css';
import '../../css/c/cp13a2bsj.css';
import '../../css/f/f72ylivjo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="sk-2_lbxb"/><path class="cp13a2bsj"/><path class="f72ylivjo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:scroll-text-duotone"} {...others} />);
}

export default Component;
