import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uobrrdb0r.css';
import '../../css/b/brt3y3b_y.css';
import '../../css/l/llbdim04y.css';
import '../../css/b/bz63l1b9z.css';
import '../../css/t/tow6a3b5l.css';
import '../../css/h/hjev0jbjt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="uobrrdb0r wm-k"/><path class="brt3y3b_y wm-k"/><path class="llbdim04y wm-k"/><path class="bz63l1b9z wm-a"/><path class="tow6a3b5l wm-a"/><path class="hjev0jbjt wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:indent-decrease"} {...others} />);
}

export default Component;
