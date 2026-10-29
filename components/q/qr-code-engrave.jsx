import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/re6n26bxt.css';
import '../../css/n/n0om6cbya.css';
import '../../css/d/d5s3tzbfe.css';
import '../../css/k/kcag22w9s.css';
import '../../css/f/f98ia0txa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="re6n26bxt wm-k"/><path class="n0om6cbya wm-a"/><path class="d5s3tzbfe wm-shadow"/><path class="kcag22w9s wm-k"/><path class="f98ia0txa wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:qr-code-engrave"} {...others} />);
}

export default Component;
