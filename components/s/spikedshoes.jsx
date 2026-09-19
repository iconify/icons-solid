import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nsfne-b7l.css';
import '../../css/y/ybz53op3a.css';
import '../../css/c/cohzr-pvi.css';
import '../../css/c/cko7uvbuv.css';
import '../../css/s/snwv6fbdi.css';
import '../../css/h/hd6nacc5n.css';
import '../../css/a/aws_p9jfv.css';
import '../../css/l/l7bddhbae.css';
import '../../css/q/q6-6o2b4a.css';
import '../../css/x/xhwgvcbrd.css';
import '../../css/e/etcjq21kp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nsfne-b7l"><path class="ybz53op3a"/><path class="cohzr-pvi"/><path class="cko7uvbuv"/><path class="snwv6fbdi"/><path class="hd6nacc5n"/><path class="aws_p9jfv"/><path class="l7bddhbae"/><path class="q6-6o2b4a"/><path class="xhwgvcbrd"/><path class="etcjq21kp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:spikedshoes"} {...others} />);
}

export default Component;
