import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zdh9olb8w.css';
import '../../css/e/ed31t1blr.css';
import '../../css/g/gm65vjmzj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="zdh9olb8w"/><path class="ed31t1blr"/><path class="gm65vjmzj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:layout-freeform-duotone"} {...others} />);
}

export default Component;
