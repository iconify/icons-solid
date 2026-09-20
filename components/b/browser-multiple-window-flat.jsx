import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/f/f0pe0unnb.css';
import '../../css/l/lhmq3gbqs.css';
import '../../css/e/e_r28dbth.css';

const viewBox = {"width":14,"height":14};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="f0pe0unnb"/><path class="lhmq3gbqs"/><path class="e_r28dbth"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:browser-multiple-window-flat"} {...others} />);
}

export default Component;
