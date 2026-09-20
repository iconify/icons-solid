import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k4nsqv99v.css';
import '../../css/e/ek4346b-a.css';
import '../../css/j/j16jkebzn.css';
import '../../css/t/t65574bsi.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="k4nsqv99v"/><path class="ek4346b-a"/><path class="j16jkebzn"/><path class="t65574bsi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:transfer-forwarding-call"} {...others} />);
}

export default Component;
