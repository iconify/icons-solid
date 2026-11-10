import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yxc_bmehm.css';
import '../../css/p/pp942sb7j.css';
import '../../css/v/vpi7-ptsr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="yxc_bmehm"/><path class="pp942sb7j"/><path class="vpi7-ptsr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:chocolate-bar"} {...others} />);
}

export default Component;
