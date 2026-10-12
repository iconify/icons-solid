import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r8xftlbsk.css';
import '../../css/k/kaqnyrehg.css';
import '../../css/w/whtfztb1y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="r8xftlbsk"/><path class="kaqnyrehg"/><path class="whtfztb1y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:books"} {...others} />);
}

export default Component;
