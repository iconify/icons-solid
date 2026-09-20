import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/cos5mxb2j.css';
import '../../css/h/hgr3jjbai.css';
import '../../css/y/yy7j92b2u.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="cos5mxb2j"/><path class="hgr3jjbai"/><path class="yy7j92b2u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:wireless-tower-building"} {...others} />);
}

export default Component;
