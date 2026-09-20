import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wkbisqbsd.css';
import '../../css/p/p2wm08ihw.css';
import '../../css/r/r_01umbet.css';
import '../../css/v/vprexkb0f.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="wkbisqbsd"/><path class="p2wm08ihw"/><path class="r_01umbet"/><path class="vprexkb0f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:chat-bubble-oval-smiley-2"} {...others} />);
}

export default Component;
