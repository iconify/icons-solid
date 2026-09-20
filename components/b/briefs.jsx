import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ofta6rb_y.css';
import '../../css/z/z3n81ldpx.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/a/aimcm0bvo.css';
import '../../css/l/lf8o2bucu.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="ofta6rb_y"/><path class="z3n81ldpx"/><g class="x8poo_bjf"><path class="aimcm0bvo"/><path class="lf8o2bucu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:briefs"} {...others} />);
}

export default Component;
