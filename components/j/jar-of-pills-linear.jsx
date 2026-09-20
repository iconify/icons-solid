import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/fs3c2u4vr.css';
import '../../css/s/smcsc6bgv.css';
import '../../css/i/iyts3fg-w.css';
import '../../css/e/ezwihtbnk.css';
import '../../css/n/nmr5z_b9u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="fs3c2u4vr"/><path class="smcsc6bgv"/><path class="iyts3fg-w"/><path class="ezwihtbnk"/><path class="nmr5z_b9u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:jar-of-pills-linear"} {...others} />);
}

export default Component;
