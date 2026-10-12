import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f27e9sb7q.css';
import '../../css/o/okcbgs62p.css';
import '../../css/y/ysz-f3b-u.css';
import '../../css/d/d2_ueooqs.css';
import '../../css/f/fe81k0bsy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="f27e9sb7q"/><path class="okcbgs62p"/><path class="ysz-f3b-u"/><path class="d2_ueooqs"/><path class="fe81k0bsy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:image-plus-duotone"} {...others} />);
}

export default Component;
