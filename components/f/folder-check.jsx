import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/ig50veboi.css';
import '../../css/c/cdj5e1p9p.css';
import '../../css/s/szz1igb8o.css';
import '../../css/j/j-gl3pb6e.css';
import '../../css/u/utd24w3nr.css';
import '../../css/b/b2qllxbgi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="ig50veboi wm-shadow"/><path class="cdj5e1p9p"/><path class="szz1igb8o"/><path class="j-gl3pb6e"/><path class="utd24w3nr"/><path class="b2qllxbgi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:folder-check"} {...others} />);
}

export default Component;
