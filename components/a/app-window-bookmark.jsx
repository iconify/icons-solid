import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/z/zh66-hbof.css';
import '../../css/t/t69zavbbw.css';
import '../../css/v/v93r2imrg.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="zh66-hbof"/><path class="t69zavbbw"/><path class="v93r2imrg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:app-window-bookmark"} {...others} />);
}

export default Component;
