import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/u/ugaljkxxq.css';
import '../../css/r/rtwk713ua.css';
import '../../css/g/g5qchsf3q.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="ugaljkxxq"/><path class="rtwk713ua"/><path class="g5qchsf3q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:phone-selfie-front"} {...others} />);
}

export default Component;
