import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/y/yvjc3r64y.css';
import '../../css/d/dpxq9ov5b.css';
import '../../css/t/tgbgf7-4k.css';

const viewBox = {"width":14,"height":14};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="yvjc3r64y"/><path class="dpxq9ov5b"/><path class="tgbgf7-4k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:cyborg-2-flat"} {...others} />);
}

export default Component;
