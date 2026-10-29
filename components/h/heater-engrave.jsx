import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/qi88hzuzf.css';
import '../../css/e/eupplh-1m.css';
import '../../css/a/a-l-cnbiy.css';
import '../../css/d/dlwidbcql.css';
import '../../css/s/sy0e_abrq.css';
import '../../css/e/eio_anrbs.css';
import '../../css/g/gq4vx_bqt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="qi88hzuzf wm-k"/><path class="eupplh-1m wm-s"/><path class="a-l-cnbiy wm-shadow"/><path class="dlwidbcql wm-k"/><path class="sy0e_abrq wm-a"/><path class="eio_anrbs wm-k"/><path class="gq4vx_bqt wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:heater-engrave"} {...others} />);
}

export default Component;
