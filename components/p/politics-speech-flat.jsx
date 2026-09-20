import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/l/lk-0jbc2x.css';
import '../../css/n/nsb12sb4m.css';
import '../../css/y/y8b9a08tb.css';

const viewBox = {"width":14,"height":14};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="lk-0jbc2x"/><path class="nsb12sb4m"/><path class="y8b9a08tb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:politics-speech-flat"} {...others} />);
}

export default Component;
