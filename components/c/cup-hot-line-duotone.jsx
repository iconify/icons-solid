import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/z8j6ccc5g.css';
import '../../css/e/e1ulcrbja.css';
import '../../css/d/dgimva6lq.css';
import '../../css/l/lbxqy2bfr.css';
import '../../css/h/ht6mdpbgs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="z8j6ccc5g"/><path class="e1ulcrbja"/><path class="dgimva6lq"/><path class="lbxqy2bfr"/><path class="ht6mdpbgs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cup-hot-line-duotone"} {...others} />);
}

export default Component;
