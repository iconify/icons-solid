import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/j/jgnuxbb8t.css';
import '../../css/e/ev9tcu8fj.css';
import '../../css/h/hmcj_4d4v.css';
import '../../css/t/tk3ctsbhh.css';

const viewBox = {"width":14,"height":14};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="jgnuxbb8t"/><path class="ev9tcu8fj"/><path class="hmcj_4d4v"/><path class="tk3ctsbhh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:color-swatches-flat"} {...others} />);
}

export default Component;
