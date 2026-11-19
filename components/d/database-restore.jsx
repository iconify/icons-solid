import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pd3w4vb1f.css';
import '../../css/h/hbtbujlhc.css';
import '../../css/j/jiu158igz.css';
import '../../css/b/b_a5sj_xz.css';
import '../../css/c/cqo-idb3i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><ellipse class="pd3w4vb1f"/><path class="hbtbujlhc"/><ellipse class="jiu158igz"/><path class="b_a5sj_xz"/><path class="cqo-idb3i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:database-restore"} {...others} />);
}

export default Component;
