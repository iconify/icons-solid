import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/r/rgcigdc_c.css';
import '../../css/p/p0r1koben.css';
import '../../css/k/ke2-dkbvo.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="rgcigdc_c"/><path class="p0r1koben"/><path class="ke2-dkbvo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:text-formating-rotate-angle"} {...others} />);
}

export default Component;
