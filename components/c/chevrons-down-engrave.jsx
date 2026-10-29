import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/tbo20qlcr.css';
import '../../css/e/e73toccuk.css';
import '../../css/x/xatf5tb_i.css';
import '../../css/u/up3rqob9n.css';
import '../../css/u/uhxoacb3s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="tbo20qlcr wm-k"/><path class="e73toccuk wm-a"/><path class="wm-shadow xatf5tb_i"/><path class="up3rqob9n wm-k"/><path class="uhxoacb3s wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:chevrons-down-engrave"} {...others} />);
}

export default Component;
