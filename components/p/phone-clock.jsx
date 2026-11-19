import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l_vdoy6ny.css';
import '../../css/c/cb977fdem.css';
import '../../css/l/l1js82bzq.css';
import '../../css/x/xguzsdbdd.css';
import '../../css/y/yer7ptk2i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="l_vdoy6ny"/><path class="cb977fdem"/><circle class="l1js82bzq"/><circle class="xguzsdbdd"/><path class="yer7ptk2i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:phone-clock"} {...others} />);
}

export default Component;
