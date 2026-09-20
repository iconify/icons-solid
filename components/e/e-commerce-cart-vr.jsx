import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/z/zxh1gybxr.css';
import '../../css/m/mr6yvobwm.css';
import '../../css/c/cmoblzk2a.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="zxh1gybxr"/><path class="mr6yvobwm"/><path class="cmoblzk2a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:e-commerce-cart-vr"} {...others} />);
}

export default Component;
