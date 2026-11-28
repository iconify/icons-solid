import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r1p3esqct.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/dn3x7ab3i.css';
import '../../css/z/zzhd17b7a.css';
import '../../css/l/lvd-a_hwi.css';
import '../../css/i/icq-r7o2s.css';
import '../../css/t/t6jsq9biy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r1p3esqct secondary"/><g class="dt0cm9dhy primary"><path class="dn3x7ab3i"/><path class="zzhd17b7a"/><path class="lvd-a_hwi"/><path class="icq-r7o2s"/><path class="t6jsq9biy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:image-wrap-right-duo"} {...others} />);
}

export default Component;
