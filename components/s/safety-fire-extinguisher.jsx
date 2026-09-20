import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/e/ewv2ge6ug.css';
import '../../css/p/p7y_1d_fe.css';
import '../../css/z/zt0gv6bln.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="ewv2ge6ug"/><path class="p7y_1d_fe"/><path class="zt0gv6bln"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:safety-fire-extinguisher"} {...others} />);
}

export default Component;
