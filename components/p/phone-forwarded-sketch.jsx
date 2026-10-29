import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/v84758bcl.css';
import '../../css/q/qchrgwbbi.css';
import '../../css/r/r-qz_sbwo.css';
import '../../css/h/h1gv6acew.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="v84758bcl"/><path class="qchrgwbbi wm-s"/><path class="r-qz_sbwo wm-k"/><path class="h1gv6acew wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:phone-forwarded-sketch"} {...others} />);
}

export default Component;
