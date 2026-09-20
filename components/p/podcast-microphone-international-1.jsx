import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/i/i_cyoebni.css';
import '../../css/v/v3gtaabgc.css';
import '../../css/f/ff_c_uz4c.css';
import '../../css/t/tr5lgkb8t.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="i_cyoebni"/><path class="v3gtaabgc"/><path class="ff_c_uz4c"/><path class="tr5lgkb8t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:podcast-microphone-international-1"} {...others} />);
}

export default Component;
