import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kzj6jnmej.css';
import '../../css/c/cx7icqsky.css';
import '../../css/b/b3n953g_x.css';
import '../../css/j/j0wz0zsox.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/u/usozxnbrm.css';
import '../../css/p/pe_tsxbky.css';
import '../../css/j/jj7lh75iy.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="kzj6jnmej"/><path clip-rule="evenodd" class="cx7icqsky"/><path clip-rule="evenodd" class="b3n953g_x"/><circle class="j0wz0zsox"/><g class="brzn_0bpr"><circle class="usozxnbrm"/><path class="pe_tsxbky"/><circle class="jj7lh75iy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:chrome"} {...others} />);
}

export default Component;
