import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/uq9xj6cez.css';
import '../../css/d/dlpg85fto.css';
import '../../css/h/hb98s3yxz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="uq9xj6cez"/><path class="dlpg85fto wm-shadow"/><path class="hb98s3yxz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:chevron-up-engrave"} {...others} />);
}

export default Component;
