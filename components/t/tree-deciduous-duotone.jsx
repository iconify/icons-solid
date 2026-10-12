import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iso_je_tj.css';
import '../../css/p/p3y33ibxy.css';
import '../../css/y/y_ybzcyuj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="iso_je_tj"/><path class="p3y33ibxy"/><path class="y_ybzcyuj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:tree-deciduous-duotone"} {...others} />);
}

export default Component;
