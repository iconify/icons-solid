import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/b_z8-9b0c.css';
import '../../css/v/v6vm4shis.css';
import '../../css/q/qfd_dkbcz.css';
import '../../css/c/c2osk-a-j.css';
import '../../css/f/fbhxntbxi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="b_z8-9b0c wm-k"/><path class="v6vm4shis wm-a"/><path class="qfd_dkbcz wm-shadow"/><path class="c2osk-a-j wm-k"/><path class="fbhxntbxi wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:ambulance-engrave"} {...others} />);
}

export default Component;
