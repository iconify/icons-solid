import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/x/x9xer61ny.css';
import '../../css/d/dp0zwgbbl.css';
import '../../css/w/wuyzb9bxj.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="x9xer61ny"/><path class="dp0zwgbbl"/><path class="wuyzb9bxj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:transfer-pictures-smartphone"} {...others} />);
}

export default Component;
