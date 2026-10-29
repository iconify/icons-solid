import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/jyjex658h.css';
import '../../css/z/z_2gvg9_c.css';
import '../../css/d/dmh96mbbx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="jyjex658h wm-a"/><path class="wm-k z_2gvg9_c"/><path class="dmh96mbbx wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-man-beard-sketch"} {...others} />);
}

export default Component;
