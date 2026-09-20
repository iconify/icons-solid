import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vil_4pbkk.css';
import '../../css/r/rxgfkbbrm.css';
import '../../css/j/jjw4oibie.css';
import '../../css/d/do4-en45l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="vil_4pbkk"/><path class="rxgfkbbrm"/><path class="jjw4oibie"/><path class="do4-en45l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:bubble-chat-double-text"} {...others} />);
}

export default Component;
