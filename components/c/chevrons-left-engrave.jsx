import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/pomc15b0m.css';
import '../../css/s/s26v07sbu.css';
import '../../css/k/kmdtw6bxj.css';
import '../../css/g/go4z5ccdt.css';
import '../../css/d/dx9i-tzjz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="pomc15b0m wm-k"/><path class="s26v07sbu wm-a"/><path class="kmdtw6bxj wm-shadow"/><path class="go4z5ccdt wm-k"/><path class="dx9i-tzjz wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:chevrons-left-engrave"} {...others} />);
}

export default Component;
