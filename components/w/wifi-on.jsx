import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/y036-m6ty.css';
import '../../css/z/zyz74-2cr.css';
import '../../css/u/u84m1l8lx.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="y036-m6ty"/><path class="zyz74-2cr"/><path class="u84m1l8lx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:wifi-on"} {...others} />);
}

export default Component;
