import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/qalri0_ra.css';
import '../../css/w/wx3_h_fnd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="qalri0_ra"/><path class="wx3_h_fnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:zakat"} {...others} />);
}

export default Component;
