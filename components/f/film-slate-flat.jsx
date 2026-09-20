import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/u/ut9dq2spn.css';
import '../../css/z/zquzsxtwc.css';
import '../../css/g/gb6yjacvb.css';

const viewBox = {"width":14,"height":14};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="ut9dq2spn"/><path class="zquzsxtwc"/><path class="gb6yjacvb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:film-slate-flat"} {...others} />);
}

export default Component;
