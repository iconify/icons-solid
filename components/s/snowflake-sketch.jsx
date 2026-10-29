import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/suzw7xbbl.css';
import '../../css/k/kivd_7bqx.css';
import '../../css/v/vhm99pbwe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="suzw7xbbl wm-k"/><path class="kivd_7bqx wm-k"/><path class="vhm99pbwe wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:snowflake-sketch"} {...others} />);
}

export default Component;
