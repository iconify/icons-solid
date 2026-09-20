import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/t/t8ir5j57n.css';
import '../../css/v/vm3e4ebcu.css';
import '../../css/t/t2yjsqb-b.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="t8ir5j57n"/><path class="vm3e4ebcu"/><path class="t2yjsqb-b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:business-cash-eye"} {...others} />);
}

export default Component;
