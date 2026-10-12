import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tx8smgb6j.css';
import '../../css/z/zo-ctpbkz.css';
import '../../css/e/e8eqn_7bl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="tx8smgb6j"/><path class="zo-ctpbkz"/><path class="e8eqn_7bl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:parasol-duotone"} {...others} />);
}

export default Component;
