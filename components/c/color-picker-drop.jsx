import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/n/noo63lbvs.css';
import '../../css/g/gldq60b_b.css';
import '../../css/w/wdxiyjbdk.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="noo63lbvs"/><path class="gldq60b_b"/><path class="wdxiyjbdk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:color-picker-drop"} {...others} />);
}

export default Component;
