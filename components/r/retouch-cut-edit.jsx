import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xd424yelu.css';
import '../../css/d/d8xjnkbxa.css';
import '../../css/w/wwkxdntgn.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="xd424yelu"/><path class="d8xjnkbxa"/><path class="wwkxdntgn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:retouch-cut-edit"} {...others} />);
}

export default Component;
