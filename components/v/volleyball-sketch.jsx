import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/gev3iobdk.css';
import '../../css/r/r0lcoh1hs.css';
import '../../css/l/l_usi832h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="gev3iobdk"/><path class="r0lcoh1hs wm-k"/><path class="l_usi832h wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:volleyball-sketch"} {...others} />);
}

export default Component;
