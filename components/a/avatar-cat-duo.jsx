import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/ax02kbzww.css';
import '../../css/z/zvmwgilcj.css';
import '../../css/d/dy87hz61h.css';
import '../../css/b/bcdke8buh.css';
import '../../css/c/c_5-x3brd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="ax02kbzww"/><path class="zvmwgilcj"/><path class="dy87hz61h wm-a"/><path class="bcdke8buh"/><path class="c_5-x3brd wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-cat-duo"} {...others} />);
}

export default Component;
