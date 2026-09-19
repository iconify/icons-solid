import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/ddxm3dqot.css';
import '../../css/f/ft-e_vuvv.css';
import '../../css/p/peve4ubrw.css';
import '../../css/u/utfedrb8y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ddxm3dqot"/><path class="ft-e_vuvv"/><path class="peve4ubrw"/><path class="utfedrb8y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ai-chemistry-03"} {...others} />);
}

export default Component;
