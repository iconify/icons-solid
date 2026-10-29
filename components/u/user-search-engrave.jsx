import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/is7p6owsa.css';
import '../../css/p/pz3jf5b8k.css';
import '../../css/c/c334w-shb.css';
import '../../css/l/ljeitrr-k.css';
import '../../css/t/t8eys6bao.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="is7p6owsa wm-k"/><path class="pz3jf5b8k wm-s"/><path class="c334w-shb wm-shadow"/><path class="ljeitrr-k wm-k"/><path class="t8eys6bao wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:user-search-engrave"} {...others} />);
}

export default Component;
