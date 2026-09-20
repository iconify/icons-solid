import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/v/vn3ohy7yk.css';
import '../../css/v/vh5twnb_y.css';
import '../../css/d/ds11oubjp.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="vn3ohy7yk"/><path class="vh5twnb_y"/><path class="ds11oubjp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:circus-tent"} {...others} />);
}

export default Component;
