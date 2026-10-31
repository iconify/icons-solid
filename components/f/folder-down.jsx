import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u0yazjyab.css';
import '../../css/b/b58spfbvq.css';
import '../../css/m/mycr-pbfl.css';
import '../../css/c/cxaz9wead.css';
import '../../css/z/zkcxxcclj.css';
import '../../css/d/d4j4d8byw.css';
import '../../css/p/p4z3j6bmt.css';
import '../../css/d/d6ed8ebnx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="u0yazjyab wm-k"/><path class="b58spfbvq wm-deco"/><path class="mycr-pbfl wm-k"/><path class="cxaz9wead wm-k"/><path class="wm-shadow zkcxxcclj"/><path class="d4j4d8byw wm-shine"/><path class="p4z3j6bmt wm-shine"/><path class="d6ed8ebnx wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:folder-down"} {...others} />);
}

export default Component;
