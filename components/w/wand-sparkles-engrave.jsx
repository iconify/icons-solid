import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/f--02_bkw.css';
import '../../css/t/ttsg-rbur.css';
import '../../css/a/a1xc6ibvk.css';
import '../../css/p/psyzc1_dw.css';
import '../../css/m/mvz-u7b1a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="f--02_bkw wm-k"/><path class="ttsg-rbur wm-a"/><path class="a1xc6ibvk wm-shadow"/><path class="psyzc1_dw wm-k"/><path class="mvz-u7b1a wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:wand-sparkles-engrave"} {...others} />);
}

export default Component;
