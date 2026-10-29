import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/l9vmhfb_s.css';
import '../../css/r/r3yr01bjg.css';
import '../../css/x/xrfn3bcyz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="l9vmhfb_s"/><path class="r3yr01bjg wm-shadow"/><path class="xrfn3bcyz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:shield-engrave"} {...others} />);
}

export default Component;
