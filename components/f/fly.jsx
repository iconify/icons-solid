import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/celg2ob7w.css';
import '../../css/c/c_94p6myl.css';
import '../../css/y/ybnj9-b7s.css';
import '../../css/p/p1vmdcc6o.css';
import '../../css/z/z04drlb1l.css';
import '../../css/q/qd79u_bvm.css';
import '../../css/y/y5xkvuu6k.css';
import '../../css/p/p-uji_bwo.css';
import '../../css/p/pvzq6bbyg.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="celg2ob7w"/><path class="c_94p6myl"/><path class="ybnj9-b7s"/><path class="p1vmdcc6o"/><g class="z04drlb1l"><path class="qd79u_bvm"/><path class="y5xkvuu6k"/><path class="p-uji_bwo"/><path class="pvzq6bbyg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:fly"} {...others} />);
}

export default Component;
