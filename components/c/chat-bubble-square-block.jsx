import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tokx6qbwt.css';
import '../../css/t/tkrdvij0b.css';
import '../../css/z/znvvnxbpy.css';
import '../../css/n/npbwedb1v.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="tokx6qbwt"/><path class="tkrdvij0b"/><path class="znvvnxbpy"/><path class="npbwedb1v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:chat-bubble-square-block"} {...others} />);
}

export default Component;
