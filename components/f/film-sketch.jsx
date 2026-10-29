import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/t74_kibuv.css';
import '../../css/j/j33chbdtj.css';
import '../../css/y/yr0n5pb1l.css';
import '../../css/e/et26kmbjm.css';
import '../../css/p/pxmffbcsz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="t74_kibuv wm-k"/><path class="j33chbdtj wm-k"/><path class="wm-k yr0n5pb1l"/><path class="et26kmbjm wm-a"/><path class="pxmffbcsz wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:film-sketch"} {...others} />);
}

export default Component;
