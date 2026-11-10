import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i9xmujbmc.css';
import '../../css/u/uc_v_4c1j.css';
import '../../css/w/w-t956ach.css';
import '../../css/i/iaw2oclgf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="i9xmujbmc"/><path class="uc_v_4c1j"/><path class="w-t956ach"/><path class="iaw2oclgf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:keyboard-down"} {...others} />);
}

export default Component;
