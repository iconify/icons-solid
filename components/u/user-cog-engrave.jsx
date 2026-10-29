import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/is7p6owsa.css';
import '../../css/c/cb8204bna.css';
import '../../css/l/llxi8eg4n.css';
import '../../css/l/ljeitrr-k.css';
import '../../css/e/ekmlpmtjg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="is7p6owsa wm-k"/><path class="cb8204bna wm-s"/><path class="llxi8eg4n wm-shadow"/><path class="ljeitrr-k wm-k"/><path class="ekmlpmtjg wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:user-cog-engrave"} {...others} />);
}

export default Component;
