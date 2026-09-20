import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/a3-li-bcv.css';
import '../../css/v/vcmhjlbvo.css';
import '../../css/o/oopp9ccbj.css';
import '../../css/l/las78regp.css';
import '../../css/x/xmgyv7k4a.css';
import '../../css/x/xprygsf1c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="a3-li-bcv"/><path class="vcmhjlbvo"/><path class="oopp9ccbj"/><path class="las78regp"/><path class="xmgyv7k4a"/><path class="xprygsf1c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:like-broken"} {...others} />);
}

export default Component;
