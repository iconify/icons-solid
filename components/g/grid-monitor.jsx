import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/h/hvr24jb0v.css';
import '../../css/i/ifgj5l01l.css';
import '../../css/m/m1i0b5bdj.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="hvr24jb0v"/><path class="ifgj5l01l"/><path class="m1i0b5bdj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:grid-monitor"} {...others} />);
}

export default Component;
