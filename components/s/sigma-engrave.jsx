import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/nbtn6r3qe.css';
import '../../css/z/z7rsvjb5o.css';
import '../../css/o/o1fxrtmvk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="nbtn6r3qe"/><path class="wm-shadow z7rsvjb5o"/><path class="o1fxrtmvk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:sigma-engrave"} {...others} />);
}

export default Component;
