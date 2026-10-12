import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ur9kflbuq.css';
import '../../css/l/lbfwef4od.css';
import '../../css/j/jvmrv6zbn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ur9kflbuq"/><path class="lbfwef4od"/><path class="jvmrv6zbn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:hand-fist-duotone"} {...others} />);
}

export default Component;
