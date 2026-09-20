import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/c/cnydaccbe.css';
import '../../css/a/ai3u1bbps.css';
import '../../css/i/imx1lsbhj.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="cnydaccbe"/><path class="ai3u1bbps"/><path class="imx1lsbhj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:worldwide-web-users"} {...others} />);
}

export default Component;
