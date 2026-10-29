import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/ierrpibnk.css';
import '../../css/m/mzn8-sbvw.css';
import '../../css/x/xg9zu_abp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ierrpibnk"/><path class="mzn8-sbvw wm-shadow"/><path class="xg9zu_abp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cooking-pot-engrave"} {...others} />);
}

export default Component;
