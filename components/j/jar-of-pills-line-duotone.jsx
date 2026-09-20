import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/fs3c2u4vr.css';
import '../../css/q/qj0qu-5ec.css';
import '../../css/f/f-d2l1b3s.css';
import '../../css/e/ezwihtbnk.css';
import '../../css/n/nmr5z_b9u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="fs3c2u4vr"/><path class="qj0qu-5ec"/><path class="f-d2l1b3s"/><path class="ezwihtbnk"/><path class="nmr5z_b9u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:jar-of-pills-line-duotone"} {...others} />);
}

export default Component;
