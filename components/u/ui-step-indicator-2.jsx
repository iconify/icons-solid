import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/w/wahs48v3a.css';
import '../../css/j/jtu742b3e.css';
import '../../css/f/f1z770bbh.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="wahs48v3a"/><path class="jtu742b3e"/><path class="f1z770bbh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:ui-step-indicator-2"} {...others} />);
}

export default Component;
