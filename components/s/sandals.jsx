import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/wd-dv4b_e.css';
import '../../css/v/vgka4bcvc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="wd-dv4b_e"/><path class="vgka4bcvc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:sandals"} {...others} />);
}

export default Component;
