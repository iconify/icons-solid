import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bj7jj_8ec.css';
import '../../css/d/d__vf3onq.css';
import '../../css/a/a24oi2bps.css';
import '../../css/g/guhsbubse.css';
import '../../css/u/uic3-ibie.css';
import '../../css/f/fzrkk3bcs.css';
import '../../css/t/t9wms6bim.css';
import '../../css/p/py34ogbbs.css';
import '../../css/d/d9vzirtfg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="bj7jj_8ec wm-shadow"/><path class="d__vf3onq wm-k"/><path class="a24oi2bps wm-k"/><path class="guhsbubse wm-k"/><path class="uic3-ibie wm-shine"/><path class="fzrkk3bcs wm-a"/><path class="t9wms6bim wm-a"/><path class="py34ogbbs wm-a"/><path class="d9vzirtfg wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-coquette:list-checks"} {...others} />);
}

export default Component;
