import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/e/e7-fhk4_d.css';
import '../../css/l/lwpyjib8f.css';
import '../../css/u/up2lhibkr.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="e7-fhk4_d"/><path class="lwpyjib8f"/><path class="up2lhibkr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:job-seach-man"} {...others} />);
}

export default Component;
