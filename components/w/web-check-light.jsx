import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e5qj82b_z.css';
import '../../css/l/lvvccctbs.css';
import '../../css/x/xws3e-b5b.css';
import '../../css/y/yx0oz3bht.css';

const viewBox = {"width":38.844,"height":37.926,"left":8.424,"top":15.686};
const content = `<g class="ft5dv1b6b"><path class="e5qj82b_z"/><path class="lvvccctbs"/><path class="xws3e-b5b"/><path class="yx0oz3bht"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:web-check-light"} {...others} />);
}

export default Component;
