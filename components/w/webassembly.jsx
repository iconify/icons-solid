import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ug3-7_wvo.css';
import '../../css/r/rpvb-o6bq.css';
import '../../css/f/f7ukukz0z.css';
import '../../css/j/j2bhdfb5h.css';
import '../../css/t/trm-r7bnn.css';
import '../../css/t/tevcb5icz.css';
import '../../css/j/jiial9gjh.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="ug3-7_wvo"/><g class="rpvb-o6bq"><path class="f7ukukz0z"/><path clip-rule="evenodd" class="j2bhdfb5h"/><g clip-rule="evenodd" class="trm-r7bnn"><path transform="matrix(2.138 0 0 2.239 43.22 50.051)" class="tevcb5icz"/><path transform="matrix(2.138 0 0 2.239 53.91 38.14)" class="jiial9gjh"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:webassembly"} {...others} />);
}

export default Component;
