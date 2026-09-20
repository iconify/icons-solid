import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pkj4-xbpu.css';
import '../../css/x/xvq7301im.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="pkj4-xbpu"/><path clip-rule="evenodd" class="xvq7301im"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:payment-cash-out-3-flat"} {...others} />);
}

export default Component;
