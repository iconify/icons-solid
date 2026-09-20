import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/k/kn1acfbpi.css';
import '../../css/f/f69s4vbjl.css';
import '../../css/w/wz1sd4gsh.css';
import '../../css/v/v45rcfbxh.css';
import '../../css/t/t58i-ubmu.css';
import '../../css/s/syh7zz0li.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="kn1acfbpi"/><path class="f69s4vbjl"/><path class="wz1sd4gsh"/><path class="v45rcfbxh"/><path class="t58i-ubmu"/><path class="syh7zz0li"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:select-target-crosshair-1"} {...others} />);
}

export default Component;
