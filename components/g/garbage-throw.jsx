import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/x/x2d1mxb0y.css';
import '../../css/z/zlmlysc6g.css';
import '../../css/u/urcv4fbrt.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="x2d1mxb0y"/><path class="zlmlysc6g"/><path class="urcv4fbrt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:garbage-throw"} {...others} />);
}

export default Component;
