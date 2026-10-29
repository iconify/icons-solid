import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/gnhf0cczt.css';
import '../../css/u/uzb644j9v.css';
import '../../css/t/tyl_u5bcc.css';
import '../../css/y/y9gz_6bcp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="gnhf0cczt"/><path class="uzb644j9v wm-a"/><path class="tyl_u5bcc wm-a"/><path class="y9gz_6bcp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:popcorn-duo"} {...others} />);
}

export default Component;
