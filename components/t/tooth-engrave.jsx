import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/wo03t_npi.css';
import '../../css/o/ozwb22glz.css';
import '../../css/w/wjf1ikbgx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="wo03t_npi"/><path class="ozwb22glz wm-shadow"/><path class="wjf1ikbgx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:tooth-engrave"} {...others} />);
}

export default Component;
