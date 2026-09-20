import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wnxi2rbnm.css';
import '../../css/g/g7dt3p6dr.css';
import '../../css/c/cedyn8zij.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="wnxi2rbnm"><path clip-rule="evenodd" class="g7dt3p6dr"/><path class="cedyn8zij"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:gold-flat"} {...others} />);
}

export default Component;
