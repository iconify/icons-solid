import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sb5c9986i.css';
import '../../css/w/wt5ai1srv.css';
import '../../css/t/twp126wdr.css';
import '../../css/c/cmm-1kbqi.css';
import '../../css/i/i66aqyp3z.css';
import '../../css/t/tkjj65bgw.css';
import '../../css/q/qmopq8bmx.css';
import '../../css/k/kihvnsbbt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="sb5c9986i"/><path class="wt5ai1srv"/><path class="twp126wdr"/><path class="cmm-1kbqi"/><path class="i66aqyp3z"/><path class="tkjj65bgw"/><path class="qmopq8bmx"/><path class="kihvnsbbt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:calculator-bold-duotone"} {...others} />);
}

export default Component;
