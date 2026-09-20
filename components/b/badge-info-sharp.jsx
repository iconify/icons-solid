import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/x/xgaf0nbdt.css';
import '../../css/m/m8hyyfbac.css';
import '../../css/f/ff45hndep.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="xgaf0nbdt"/><path class="m8hyyfbac"/><path class="ff45hndep"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:badge-info-sharp"} {...others} />);
}

export default Component;
