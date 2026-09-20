import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wj4kgr0on.css';
import '../../css/v/vymljlban.css';
import '../../css/t/t6v6tt4ph.css';
import '../../css/p/pc-qbvbaa.css';
import '../../css/d/di65ex7cw.css';
import '../../css/z/zv0dnnb2n.css';
import '../../css/f/fuyrrb4gy.css';
import '../../css/v/v_f58ob3t.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="wj4kgr0on"><path class="vymljlban"/><path class="t6v6tt4ph"/><path class="pc-qbvbaa"/><path class="di65ex7cw"/><path class="zv0dnnb2n"/><path class="fuyrrb4gy"/><path class="v_f58ob3t"/></g><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:bigender"} {...others} />);
}

export default Component;
