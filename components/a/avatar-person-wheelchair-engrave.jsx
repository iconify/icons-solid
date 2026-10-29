import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/oj76pzyor.css';
import '../../css/p/pw6mitbie.css';
import '../../css/t/tbegqd3ls.css';
import '../../css/r/r8kz99blj.css';
import '../../css/k/k2_ouvben.css';
import '../../css/o/obop-kb6d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="oj76pzyor wm-k"/><path class="pw6mitbie wm-a"/><path class="tbegqd3ls wm-shadow"/><path class="r8kz99blj wm-k"/><path class="k2_ouvben wm-a"/><path class="obop-kb6d wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-person-wheelchair-engrave"} {...others} />);
}

export default Component;
