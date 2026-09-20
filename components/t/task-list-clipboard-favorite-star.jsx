import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/fv5a4ub5s.css';
import '../../css/y/ybfoqibmr.css';
import '../../css/h/h0-dxg_hl.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="fv5a4ub5s"/><path class="ybfoqibmr"/><path class="h0-dxg_hl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:task-list-clipboard-favorite-star"} {...others} />);
}

export default Component;
