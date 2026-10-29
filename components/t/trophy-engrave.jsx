import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/hfap8z5lo.css';
import '../../css/p/pydtcwi0b.css';
import '../../css/p/pfzd08f0w.css';
import '../../css/r/ri984nurg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="hfap8z5lo"/><path class="pydtcwi0b wm-shadow"/><path class="pfzd08f0w"/><path class="ri984nurg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:trophy-engrave"} {...others} />);
}

export default Component;
