import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/m_n3hfvmo.css';
import '../../css/v/vx6s_6z_m.css';
import '../../css/l/l9asld1on.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="m_n3hfvmo"/><path class="vx6s_6z_m"/><path class="l9asld1on"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:plus-minus"} {...others} />);
}

export default Component;
