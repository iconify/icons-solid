import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/sul672bkd.css';
import '../../css/e/eeypgqbjc.css';
import '../../css/d/dqwry0bep.css';
import '../../css/m/me_u55doq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="sul672bkd"/><path class="eeypgqbjc wm-a"/><path class="dqwry0bep wm-k"/><path class="me_u55doq wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:passport-sketch"} {...others} />);
}

export default Component;
