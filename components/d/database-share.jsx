import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/b/bv4j_vbwv.css';
import '../../css/w/wltzwqb8g.css';
import '../../css/t/td6-0hbao.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="bv4j_vbwv"/><path class="wltzwqb8g"/><path class="td6-0hbao"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:database-share"} {...others} />);
}

export default Component;
