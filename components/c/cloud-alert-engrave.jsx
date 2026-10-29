import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/nezjtixvo.css';
import '../../css/f/ftut6hr7j.css';
import '../../css/c/cvilh7buk.css';
import '../../css/g/g56b45b0x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="nezjtixvo wm-k"/><path class="ftut6hr7j wm-shadow"/><path class="cvilh7buk wm-k"/><path class="g56b45b0x wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cloud-alert-engrave"} {...others} />);
}

export default Component;
