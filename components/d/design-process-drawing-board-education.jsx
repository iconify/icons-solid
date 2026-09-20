import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/eq-pypbom.css';
import '../../css/l/lnorv1bdn.css';
import '../../css/i/ic2kofb0f.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="eq-pypbom"/><path class="lnorv1bdn"/><path class="ic2kofb0f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:design-process-drawing-board-education"} {...others} />);
}

export default Component;
