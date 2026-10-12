import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z7_yclb0s.css';
import '../../css/e/en2czxdod.css';
import '../../css/c/cya5rab3t.css';
import '../../css/v/vi6g8th6c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="z7_yclb0s"/><path class="en2czxdod"/><path class="cya5rab3t"/><path class="vi6g8th6c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:socks"} {...others} />);
}

export default Component;
