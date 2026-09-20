import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/p/pra9yqb_a.css';
import '../../css/h/hu1yjobuk.css';
import '../../css/g/g_-f5xbnn.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="pra9yqb_a"/><path class="hu1yjobuk"/><path class="g_-f5xbnn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:voice-id-approved"} {...others} />);
}

export default Component;
