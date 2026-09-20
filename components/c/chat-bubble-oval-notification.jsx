import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wkbisqbsd.css';
import '../../css/o/o0ovufbew.css';
import '../../css/y/y5c-idbjg.css';
import '../../css/a/al5je41ek.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="wkbisqbsd"/><path class="o0ovufbew"/><path class="y5c-idbjg"/><path class="al5je41ek"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:chat-bubble-oval-notification"} {...others} />);
}

export default Component;
