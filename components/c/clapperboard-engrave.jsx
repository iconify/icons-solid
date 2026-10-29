import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/v8ivd-pjc.css';
import '../../css/a/aot10xncv.css';
import '../../css/t/txvu2kl1h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="v8ivd-pjc"/><path class="aot10xncv wm-shadow"/><path class="txvu2kl1h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:clapperboard-engrave"} {...others} />);
}

export default Component;
