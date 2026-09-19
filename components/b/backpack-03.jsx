import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/g0pj_sagf.css';
import '../../css/h/hl9_4mpqh.css';
import '../../css/x/xr8gsh1az.css';
import '../../css/i/iqu_9x4pn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="g0pj_sagf"/><path class="hl9_4mpqh"/><path class="xr8gsh1az"/><path class="iqu_9x4pn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:backpack-03"} {...others} />);
}

export default Component;
