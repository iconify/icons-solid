import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/q/qdgw7wbwn.css';
import '../../css/c/ctew7ohvk.css';
import '../../css/j/jn_dmmhcx.css';
import '../../css/w/wtcy6bb6a.css';

const viewBox = {"width":32,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="qdgw7wbwn"/><path class="ctew7ohvk"/><path class="jn_dmmhcx"/><path class="wtcy6bb6a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flagpack:ma"} {...others} />);
}

export default Component;
