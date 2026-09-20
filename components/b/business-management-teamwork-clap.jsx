import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/y/yolsd6bcj.css';
import '../../css/i/ir84fxbty.css';
import '../../css/v/vzf5asbos.css';
import '../../css/k/ks79mxcop.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="yolsd6bcj"/><path class="ir84fxbty"/><path class="vzf5asbos"/><path class="ks79mxcop"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:business-management-teamwork-clap"} {...others} />);
}

export default Component;
