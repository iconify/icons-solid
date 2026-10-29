import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/ssq6xfbfm.css';
import '../../css/s/s9a35_b4n.css';
import '../../css/l/l8un0eb3f.css';
import '../../css/o/o16wlryvs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ssq6xfbfm"/><path class="s9a35_b4n wm-a"/><path class="l8un0eb3f wm-k"/><path class="o16wlryvs wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:crayon-sketch"} {...others} />);
}

export default Component;
