import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/g/gj_2b-kgy.css';
import '../../css/t/t2ojvib5p.css';
import '../../css/m/mup07mi9p.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="gj_2b-kgy"/><path class="t2ojvib5p"/><path class="mup07mi9p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:lens-horizontal"} {...others} />);
}

export default Component;
