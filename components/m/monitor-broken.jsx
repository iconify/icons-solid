import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/ekp08ikgf.css';
import '../../css/k/kva043bzk.css';
import '../../css/j/jt_thrbns.css';
import '../../css/e/ed_y78b4e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ekp08ikgf"/><path class="kva043bzk"/><path class="jt_thrbns"/><path class="ed_y78b4e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:monitor-broken"} {...others} />);
}

export default Component;
