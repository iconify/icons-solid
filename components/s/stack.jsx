import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ecuvllbog.css';
import '../../css/m/m_wrpt7lk.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><circle class="ecuvllbog"/><path class="m_wrpt7lk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"quill:stack"} {...others} />);
}

export default Component;
