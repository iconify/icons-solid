import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/hbz15abgu.css';
import '../../css/h/hobwr1b0j.css';
import '../../css/h/h0cjjvbnh.css';
import '../../css/h/hfny-hbfu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="hbz15abgu"/><path class="hobwr1b0j wm-a"/><path class="h0cjjvbnh wm-k"/><path class="hfny-hbfu wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:binoculars-sketch"} {...others} />);
}

export default Component;
