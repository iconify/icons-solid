import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/c8mmccbpe.css';
import '../../css/z/z7u4j99sm.css';
import '../../css/b/b4d1e6bie.css';
import '../../css/w/wcpe8eb7b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="c8mmccbpe wm-k"/><path class="wm-shadow z7u4j99sm"/><path class="b4d1e6bie wm-k"/><path class="wcpe8eb7b wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:car-front-engrave"} {...others} />);
}

export default Component;
