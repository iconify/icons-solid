import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/sui2dub7k.css';
import '../../css/m/mjzx30xzu.css';
import '../../css/l/lqb931lgw.css';
import '../../css/h/hlw3r33xs.css';
import '../../css/y/yjt7y95ow.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="sui2dub7k wm-k"/><path class="mjzx30xzu wm-a"/><path class="lqb931lgw wm-shadow"/><path class="hlw3r33xs wm-k"/><path class="wm-a yjt7y95ow"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:potted-plant-engrave"} {...others} />);
}

export default Component;
