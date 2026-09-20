import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q7t3wca5i.css';
import '../../css/p/p_td6gbzu.css';
import '../../css/i/ifmvdibzt.css';
import '../../css/r/rrgu0ovll.css';
import '../../css/i/ipp3_6s4t.css';
import '../../css/p/pwsd0gj7s.css';
import '../../css/z/znvhh5iuv.css';
import '../../css/v/vs52p2srx.css';
import '../../css/l/leybfkeyp.css';
import '../../css/e/egez-1ybl.css';
import '../../css/b/brdy8abtt.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="ft5dv1b6b"><path class="q7t3wca5i"/><path class="p_td6gbzu"/><path class="ifmvdibzt"/><path class="rrgu0ovll"/><path class="ipp3_6s4t"/><path class="pwsd0gj7s"/><path class="znvhh5iuv"/><path class="vs52p2srx"/><path class="leybfkeyp"/><path class="egez-1ybl"/><path class="brdy8abtt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:pile-of-money"} {...others} />);
}

export default Component;
