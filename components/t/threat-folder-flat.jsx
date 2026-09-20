import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/h/hqtysac5g.css';
import '../../css/z/zyb2qu_wj.css';
import '../../css/n/ncjvozvar.css';

const viewBox = {"width":14,"height":14};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="hqtysac5g"/><path class="zyb2qu_wj"/><path class="ncjvozvar"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:threat-folder-flat"} {...others} />);
}

export default Component;
