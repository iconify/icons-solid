import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fa6pz-bnf.css';
import '../../css/n/ns5oz0btl.css';
import '../../css/p/pc9u2x3ft.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="fa6pz-bnf"/><path class="ns5oz0btl"/><path class="pc9u2x3ft"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:binoculars-duotone"} {...others} />);
}

export default Component;
