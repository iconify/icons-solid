import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/zqdj91bic.css';
import '../../css/i/i_pnv56zt.css';
import '../../css/g/gjd70ubvd.css';
import '../../css/y/yfr2y5n3b.css';
import '../../css/o/o38mptbie.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="wm-k zqdj91bic"/><path class="i_pnv56zt wm-a"/><path class="gjd70ubvd wm-shadow"/><path class="wm-k yfr2y5n3b"/><path class="o38mptbie wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cast-engrave"} {...others} />);
}

export default Component;
