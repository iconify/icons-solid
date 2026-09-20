import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/e/e91jz5-tm.css';
import '../../css/s/sx0ycobsk.css';
import '../../css/c/cd2zdpbnx.css';
import '../../css/b/bzudmbcps.css';
import '../../css/i/if4zqtb9v.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="e91jz5-tm"/><path class="sx0ycobsk"/><path class="cd2zdpbnx"/><path class="bzudmbcps"/><path class="if4zqtb9v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:speaker"} {...others} />);
}

export default Component;
