import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/tn5uicbds.css';
import '../../css/k/karb-ydfr.css';
import '../../css/h/hqrxg7n5t.css';
import '../../css/e/e21b_1vvv.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="tn5uicbds"/><path class="karb-ydfr"/><path class="hqrxg7n5t"/><path class="e21b_1vvv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:website-development-browser-source-code"} {...others} />);
}

export default Component;
