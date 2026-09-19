import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/j5ihiobox.css';
import '../../css/p/pk5c11biu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="j5ihiobox"/><path class="pk5c11biu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:sound-off"} {...others} />);
}

export default Component;
