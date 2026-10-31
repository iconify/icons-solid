import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/et6e5ggqz.css';
import '../../css/c/c5jh0ob8z.css';
import '../../css/x/x3dux6bcz.css';
import '../../css/h/hsjmr-btn.css';
import '../../css/j/j1c52p2vy.css';
import '../../css/l/l27vzsb4e.css';
import '../../css/o/ogb4bspmz.css';

const viewBox = {"width":301,"height":151};
const content = `<g class="ft5dv1b6b"><path class="et6e5ggqz"/><path class="c5jh0ob8z"/><path class="x3dux6bcz"/><path class="hsjmr-btn"/><circle class="j1c52p2vy"/><circle class="l27vzsb4e"/><path class="ogb4bspmz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:uz"} {...others} />);
}

export default Component;
