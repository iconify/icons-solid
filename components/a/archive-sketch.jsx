import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/xddux4bha.css';
import '../../css/z/zgdn5--dp.css';
import '../../css/i/ii4v6lf-c.css';
import '../../css/v/v9wyovbbf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="xddux4bha"/><path class="wm-a zgdn5--dp"/><path class="ii4v6lf-c wm-k"/><path class="v9wyovbbf wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:archive-sketch"} {...others} />);
}

export default Component;
