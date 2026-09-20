import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/khhypgwbg.css';
import '../../css/i/ij9zn-b0e.css';
import '../../css/d/d8ir8h8wj.css';
import '../../css/l/l13ee7boy.css';
import '../../css/s/so03mlora.css';
import '../../css/l/ldsw72twu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="khhypgwbg"/><path class="ij9zn-b0e"/><path class="d8ir8h8wj"/><path class="l13ee7boy"/><path class="so03mlora"/><path class="ldsw72twu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bedside-table-4-broken"} {...others} />);
}

export default Component;
