import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/f/f45he6j8z.css';
import '../../css/y/yew2subez.css';
import '../../css/x/xqpsdfbut.css';
import '../../css/z/zqqmclbaa.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><g class="xyjtgccot"><path class="f45he6j8z"/><path class="yew2subez"/></g><path class="xqpsdfbut"/><path class="zqqmclbaa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:euro"} {...others} />);
}

export default Component;
